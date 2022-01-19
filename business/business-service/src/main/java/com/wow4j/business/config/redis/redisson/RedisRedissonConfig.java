package com.wow4j.business.config.redis.redisson;

import com.wow4j.business.config.redis.redisson.enums.RedissonTypeEnum;
import com.wow4j.business.config.redis.redisson.property.RedisRedissonProperty;
import lombok.extern.slf4j.Slf4j;
import org.redisson.Redisson;
import org.redisson.api.RedissonClient;
import org.redisson.config.Config;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.boot.autoconfigure.cache.CacheAutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionMessage;
import org.springframework.boot.autoconfigure.condition.ConditionOutcome;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.SpringBootCondition;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ConditionContext;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.type.AnnotatedTypeMetadata;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.Set;

import static java.util.Collections.emptyList;
import static java.util.stream.Collectors.toSet;
import static org.springframework.boot.autoconfigure.condition.ConditionOutcome.match;
import static org.springframework.boot.autoconfigure.condition.ConditionOutcome.noMatch;

/**
 * redis redisson 配置
 */
@Configuration
@ConditionalOnClass(Redisson.class)
@Conditional(RedisRedissonConfig.RedissonCondition.class)
@AutoConfigureBefore(CacheAutoConfiguration.class)
@EnableConfigurationProperties(RedisRedissonProperty.class)
@Slf4j
@Component
public class RedisRedissonConfig {

    private RedisRedissonProperty redisRedissonProperty;
    private List<Customizer<Config>> redissonCustomizers;

    public RedisRedissonConfig(RedisRedissonProperty redisRedissonProperty,
                                     ObjectProvider<List<Customizer<Config>>> customizersProvider) {
        this.redisRedissonProperty = redisRedissonProperty;
        this.redissonCustomizers = customizersProvider.getIfAvailable();
        this.redissonCustomizers = redissonCustomizers != null ? redissonCustomizers : emptyList();
    }

    static class RedissonCondition extends SpringBootCondition {
        @Override
        public ConditionOutcome getMatchOutcome(ConditionContext context, AnnotatedTypeMetadata metadata) {
            String type = context.getEnvironment().getProperty("redisson.type");
            if (type == null || type.isEmpty() || type.trim().isEmpty()) {
                type = RedissonTypeEnum.SINGLE.name();
            }
            ConditionMessage.Builder condition = ConditionMessage.forCondition("RedissonCondition",
                    String.format("(redisson.type=%s)", type));
            if (type.equalsIgnoreCase(RedissonTypeEnum.NONE.name())) {
                return noMatch(condition.found("matched value").items(ConditionMessage.Style.QUOTE, type));
            }
            Set<String> relaxedTypes = Arrays.stream(RedissonTypeEnum.values())
                    .filter(t -> t != RedissonTypeEnum.NONE)
                    .map(Enum::name)
                    .map(name -> Arrays.asList(name, name.toLowerCase(), name.toUpperCase()))
                    .flatMap(List::stream)
                    .collect(toSet());
            if (relaxedTypes.contains(type)) {
                return match(condition.found("matched value").items(ConditionMessage.Style.QUOTE, type));
            } else {
                return noMatch(condition.because("has unrecognized value '" + type + "'"));
            }
        }
    }

    @Bean(destroyMethod = "shutdown")
    @ConditionalOnMissingBean(RedissonClient.class)
    public RedissonClient redissonClient() {
        log.debug("redisson-client init...");
        Config config = new Config();
        configGlobal(config);
        switch (redisRedissonProperty.getType()) {
            case SINGLE:
                configSingle(config);
                break;
            case CLUSTER:
                configCluster(config);
                break;
            case MASTER_SLAVE:
                configMasterSlave(config);
                break;
            case SENTINEL:
                configSentinel(config);
                break;
            case REPLICATED:
                configReplicated(config);
                break;
            default:
                throw new IllegalArgumentException("illegal redisson type: " + redisRedissonProperty.getType());
        }
        // 用户自定义配置，拥有最高优先级
        redissonCustomizers.forEach(customizer -> customizer.customize(config));
        return Redisson.create(config);
    }

    private void configGlobal(Config config) {
        config.setCodec(redisRedissonProperty.getCodec().getInstance())
                .setThreads(redisRedissonProperty.getThreads())
                .setNettyThreads(redisRedissonProperty.getNettyThreads())
                .setExecutor(redisRedissonProperty.getExecutor())
                .setKeepPubSubOrder(redisRedissonProperty.isKeepPubSubOrder())
                .setTransportMode(redisRedissonProperty.getTransportMode())
                .setEventLoopGroup(redisRedissonProperty.getEventLoopGroup())
//                .setReferenceCodecProvider(redisRedissonProperty.getReferenceCodecProvider())
                .setLockWatchdogTimeout(redisRedissonProperty.getLockWatchdogTimeout())
                .setAddressResolverGroupFactory(redisRedissonProperty.getAddressResolverGroupFactory().getInstance())
                .setReferenceEnabled(redisRedissonProperty.isReferenceEnabled());
    }

    private void configSingle(Config config) {
        RedisRedissonProperty.SingleServerConfig properties = redisRedissonProperty.getSingle();
        config.useSingleServer()
                // BaseConfig
                .setPassword(properties.getPassword())
                .setSubscriptionsPerConnection(properties.getSubscriptionsPerConnection())
                .setRetryAttempts(properties.getRetryAttempts())
                .setRetryInterval(properties.getRetryInterval())
                .setTimeout(properties.getTimeout())
                .setClientName(properties.getClientName())
//                .setPingTimeout(properties.getPingTimeout())
                .setConnectTimeout(properties.getConnectTimeout())
                .setIdleConnectionTimeout(properties.getIdleConnectionTimeout())
                .setSslEnableEndpointIdentification(properties.isSslEnableEndpointIdentification())
                .setSslProvider(properties.getSslProvider())
                .setSslTruststore(properties.getSslTrustStore())
                .setSslTruststorePassword(properties.getSslKeystorePassword())
                .setSslKeystore(properties.getSslKeystore())
                .setSslKeystorePassword(properties.getSslKeystorePassword())
                .setPingConnectionInterval(properties.getPingConnectionInterval())
                .setKeepAlive(properties.isKeepAlive())
                .setTcpNoDelay(properties.isTcpNoDelay())
                // SingleServerConfig
                .setAddress(properties.getAddress())
                .setDatabase(properties.getDatabase())
                .setConnectionMinimumIdleSize(properties.getConnectionMinimumIdleSize())
                .setConnectionPoolSize(properties.getConnectionPoolSize())
                .setSubscriptionConnectionMinimumIdleSize(properties.getSubscriptionConnectionMinimumIdleSize())
                .setSubscriptionConnectionPoolSize(properties.getSubscriptionConnectionPoolSize())
                .setDnsMonitoringInterval(properties.getDnsMonitoringInterval());
    }

    private void configCluster(Config config) {
        RedisRedissonProperty.ClusterServersConfig properties = redisRedissonProperty.getCluster();
        config.useClusterServers()
                // BaseConfig
                .setPassword(properties.getPassword())
                .setSubscriptionsPerConnection(properties.getSubscriptionsPerConnection())
                .setRetryAttempts(properties.getRetryAttempts())
                .setRetryInterval(properties.getRetryInterval())
                .setTimeout(properties.getTimeout())
                .setClientName(properties.getClientName())
//                .setPingTimeout(properties.getPingTimeout())
                .setConnectTimeout(properties.getConnectTimeout())
                .setIdleConnectionTimeout(properties.getIdleConnectionTimeout())
                .setSslEnableEndpointIdentification(properties.isSslEnableEndpointIdentification())
                .setSslProvider(properties.getSslProvider())
                .setSslTruststore(properties.getSslTrustStore())
                .setSslTruststorePassword(properties.getSslKeystorePassword())
                .setSslKeystore(properties.getSslKeystore())
                .setSslKeystorePassword(properties.getSslKeystorePassword())
                .setPingConnectionInterval(properties.getPingConnectionInterval())
                .setKeepAlive(properties.isKeepAlive())
                .setTcpNoDelay(properties.isTcpNoDelay())
                // BaseMasterSlaveServersConfig
                .setLoadBalancer(properties.getLoadBalancer().getInstance())
                .setMasterConnectionMinimumIdleSize(properties.getMasterConnectionMinimumIdleSize())
                .setMasterConnectionPoolSize(properties.getMasterConnectionPoolSize())
                .setSlaveConnectionMinimumIdleSize(properties.getSlaveConnectionMinimumIdleSize())
                .setSlaveConnectionPoolSize(properties.getSlaveConnectionPoolSize())
                .setSubscriptionConnectionMinimumIdleSize(properties.getSubscriptionConnectionMinimumIdleSize())
                .setSubscriptionConnectionPoolSize(properties.getSubscriptionConnectionPoolSize())
                .setFailedSlaveCheckInterval(properties.getFailedSlaveCheckInterval())
                .setFailedSlaveReconnectionInterval(properties.getFailedSlaveReconnectionInterval())
                .setReadMode(properties.getReadMode())
                .setSubscriptionMode(properties.getSubscriptionMode())
                .setDnsMonitoringInterval(properties.getDnsMonitoringInterval())
                // ClusterServersConfig
                .addNodeAddress(properties.getNodeAddresses())
                .setScanInterval(properties.getScanInterval());
    }

    private void configMasterSlave(Config config) {
        RedisRedissonProperty.MasterSlaveServersConfig properties = redisRedissonProperty.getMasterSlave();
        config.useMasterSlaveServers()
                // BaseConfig
                .setPassword(properties.getPassword())
                .setSubscriptionsPerConnection(properties.getSubscriptionsPerConnection())
                .setRetryAttempts(properties.getRetryAttempts())
                .setRetryInterval(properties.getRetryInterval())
                .setTimeout(properties.getTimeout())
                .setClientName(properties.getClientName())
//                .setPingTimeout(properties.getPingTimeout())
                .setConnectTimeout(properties.getConnectTimeout())
                .setIdleConnectionTimeout(properties.getIdleConnectionTimeout())
                .setSslEnableEndpointIdentification(properties.isSslEnableEndpointIdentification())
                .setSslProvider(properties.getSslProvider())
                .setSslTruststore(properties.getSslTrustStore())
                .setSslTruststorePassword(properties.getSslKeystorePassword())
                .setSslKeystore(properties.getSslKeystore())
                .setSslKeystorePassword(properties.getSslKeystorePassword())
                .setPingConnectionInterval(properties.getPingConnectionInterval())
                .setKeepAlive(properties.isKeepAlive())
                .setTcpNoDelay(properties.isTcpNoDelay())
                // BaseMasterSlaveServersConfig
                .setLoadBalancer(properties.getLoadBalancer().getInstance())
                .setMasterConnectionMinimumIdleSize(properties.getMasterConnectionMinimumIdleSize())
                .setMasterConnectionPoolSize(properties.getMasterConnectionPoolSize())
                .setSlaveConnectionMinimumIdleSize(properties.getSlaveConnectionMinimumIdleSize())
                .setSlaveConnectionPoolSize(properties.getSlaveConnectionPoolSize())
                .setSubscriptionConnectionMinimumIdleSize(properties.getSubscriptionConnectionMinimumIdleSize())
                .setSubscriptionConnectionPoolSize(properties.getSubscriptionConnectionPoolSize())
                .setFailedSlaveCheckInterval(properties.getFailedSlaveCheckInterval())
                .setFailedSlaveReconnectionInterval(properties.getFailedSlaveReconnectionInterval())
                .setReadMode(properties.getReadMode())
                .setSubscriptionMode(properties.getSubscriptionMode())
                .setDnsMonitoringInterval(properties.getDnsMonitoringInterval())
                // MasterSlaveServersConfig
                .setMasterAddress(properties.getMasterAddress())
                .addSlaveAddress(properties.getSlaveAddresses())
                .setDatabase(properties.getDatabase());
    }

    private void configSentinel(Config config) {
        RedisRedissonProperty.SentinelServersConfig properties = redisRedissonProperty.getSentinel();
        config.useSentinelServers()
                // BaseConfig
                .setPassword(properties.getPassword())
                .setSubscriptionsPerConnection(properties.getSubscriptionsPerConnection())
                .setRetryAttempts(properties.getRetryAttempts())
                .setRetryInterval(properties.getRetryInterval())
                .setTimeout(properties.getTimeout())
                .setClientName(properties.getClientName())
//                .setPingTimeout(properties.getPingTimeout())
                .setConnectTimeout(properties.getConnectTimeout())
                .setIdleConnectionTimeout(properties.getIdleConnectionTimeout())
                .setSslEnableEndpointIdentification(properties.isSslEnableEndpointIdentification())
                .setSslProvider(properties.getSslProvider())
                .setSslTruststore(properties.getSslTrustStore())
                .setSslTruststorePassword(properties.getSslKeystorePassword())
                .setSslKeystore(properties.getSslKeystore())
                .setSslKeystorePassword(properties.getSslKeystorePassword())
                .setPingConnectionInterval(properties.getPingConnectionInterval())
                .setKeepAlive(properties.isKeepAlive())
                .setTcpNoDelay(properties.isTcpNoDelay())
                // BaseMasterSlaveServersConfig
                .setLoadBalancer(properties.getLoadBalancer().getInstance())
                .setMasterConnectionMinimumIdleSize(properties.getMasterConnectionMinimumIdleSize())
                .setMasterConnectionPoolSize(properties.getMasterConnectionPoolSize())
                .setSlaveConnectionMinimumIdleSize(properties.getSlaveConnectionMinimumIdleSize())
                .setSlaveConnectionPoolSize(properties.getSlaveConnectionPoolSize())
                .setSubscriptionConnectionMinimumIdleSize(properties.getSubscriptionConnectionMinimumIdleSize())
                .setSubscriptionConnectionPoolSize(properties.getSubscriptionConnectionPoolSize())
                .setFailedSlaveCheckInterval(properties.getFailedSlaveCheckInterval())
                .setFailedSlaveReconnectionInterval(properties.getFailedSlaveReconnectionInterval())
                .setReadMode(properties.getReadMode())
                .setSubscriptionMode(properties.getSubscriptionMode())
                .setDnsMonitoringInterval(properties.getDnsMonitoringInterval())
                // SentinelServersConfig
                .addSentinelAddress(properties.getSentinelAddresses())
                .setMasterName(properties.getMasterName())
                .setScanInterval(properties.getScanInterval())
                .setDatabase(properties.getDatabase());
    }

    private void configReplicated(Config config) {
        RedisRedissonProperty.ReplicatedServersConfig properties = redisRedissonProperty.getReplicated();
        config.useReplicatedServers()
                // BaseConfig
                .setPassword(properties.getPassword())
                .setSubscriptionsPerConnection(properties.getSubscriptionsPerConnection())
                .setRetryAttempts(properties.getRetryAttempts())
                .setRetryInterval(properties.getRetryInterval())
                .setTimeout(properties.getTimeout())
                .setClientName(properties.getClientName())
//                .setPingTimeout(properties.getPingTimeout())
                .setConnectTimeout(properties.getConnectTimeout())
                .setIdleConnectionTimeout(properties.getIdleConnectionTimeout())
                .setSslEnableEndpointIdentification(properties.isSslEnableEndpointIdentification())
                .setSslProvider(properties.getSslProvider())
                .setSslTruststore(properties.getSslTrustStore())
                .setSslTruststorePassword(properties.getSslKeystorePassword())
                .setSslKeystore(properties.getSslKeystore())
                .setSslKeystorePassword(properties.getSslKeystorePassword())
                .setPingConnectionInterval(properties.getPingConnectionInterval())
                .setKeepAlive(properties.isKeepAlive())
                .setTcpNoDelay(properties.isTcpNoDelay())
                // BaseMasterSlaveServersConfig
                .setLoadBalancer(properties.getLoadBalancer().getInstance())
                .setMasterConnectionMinimumIdleSize(properties.getMasterConnectionMinimumIdleSize())
                .setMasterConnectionPoolSize(properties.getMasterConnectionPoolSize())
                .setSlaveConnectionMinimumIdleSize(properties.getSlaveConnectionMinimumIdleSize())
                .setSlaveConnectionPoolSize(properties.getSlaveConnectionPoolSize())
                .setSubscriptionConnectionMinimumIdleSize(properties.getSubscriptionConnectionMinimumIdleSize())
                .setSubscriptionConnectionPoolSize(properties.getSubscriptionConnectionPoolSize())
                .setFailedSlaveCheckInterval(properties.getFailedSlaveCheckInterval())
                .setFailedSlaveReconnectionInterval(properties.getFailedSlaveReconnectionInterval())
                .setReadMode(properties.getReadMode())
                .setSubscriptionMode(properties.getSubscriptionMode())
                .setDnsMonitoringInterval(properties.getDnsMonitoringInterval())
                // ReplicatedServersConfig
                .addNodeAddress(properties.getNodeAddresses())
                .setScanInterval(properties.getScanInterval())
                .setDatabase(properties.getDatabase());
    }
}
