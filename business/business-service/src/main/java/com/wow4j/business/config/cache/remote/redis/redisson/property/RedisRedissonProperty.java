package com.wow4j.business.config.cache.remote.redis.redisson.property;

import com.wow4j.business.config.cache.remote.redis.redisson.enums.RedissonAddressResolverGroupFactoryEnum;
import com.wow4j.business.config.cache.remote.redis.redisson.enums.RedissonCodecEnum;
import com.wow4j.business.config.cache.remote.redis.redisson.enums.RedissonLoadBalancerEnum;
import com.wow4j.business.config.cache.remote.redis.redisson.enums.RedissonTypeEnum;
import io.netty.channel.EventLoopGroup;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.redisson.codec.DefaultReferenceCodecProvider;
import org.redisson.codec.ReferenceCodecProvider;
import org.redisson.config.ReadMode;
import org.redisson.config.SslProvider;
import org.redisson.config.SubscriptionMode;
import org.redisson.config.TransportMode;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.NestedConfigurationProperty;
import org.springframework.stereotype.Component;
import java.net.URL;
import java.util.concurrent.ExecutorService;

/**
 * Redis redisson 属性
 *
 * 具体参数配置也可查看：https://github.com/redisson/redisson/wiki/2.-%E9%85%8D%E7%BD%AE%E6%96%B9%E6%B3%95
 */
@ConfigurationProperties(prefix = "redisson")
@Data
@Component
public class RedisRedissonProperty {

    /** 线程池数量，默认值：当前处理器核数量 * 2 **/
    private int threads = 0;

    /** Netty 线程池数量，默认值：当前处理器核数量 * 2 **/
    private int nettyThreads = 0;

    /** Redis 进行序列化和反序列化的类型，默认值：jackson **/
    private RedissonCodecEnum codec = RedissonCodecEnum.STRING;

    /** Codec 注册和获取功能的提供者，默认值：DefaultCodecProvider **/
    private ReferenceCodecProvider referenceCodecProvider = new DefaultReferenceCodecProvider();

    /** 单独提供一个线程池实例 **/
    private ExecutorService executor;

    /** Redisson 参考功能的配置选项，默认值：true **/
    private boolean referenceEnabled = true;

    /** TransportMode，默认值：NIO **/
    private TransportMode transportMode = TransportMode.NIO;

    /** 单独指定一个 EventLoopGroup **/
    private EventLoopGroup eventLoopGroup;

    /** 锁监视器的超时时间，默认值：30000 ms **/
    private long lockWatchdogTimeout = 30 * 1000;

    /** 是否顺序处理或并发处理 PubSub 消息，默认值：true **/
    private boolean keepPubSubOrder = true;

    /** Redis 服务端模式，默认值：single **/
    private RedissonTypeEnum type = RedissonTypeEnum.SINGLE;

    /** 地址解析器，默认值：DnsAddressResolverGroupFactory **/
    private RedissonAddressResolverGroupFactoryEnum addressResolverGroupFactory = RedissonAddressResolverGroupFactoryEnum.DEFAULT;

    /** 单节点模式 */
    @NestedConfigurationProperty
    private SingleServerConfig single = new SingleServerConfig();
    /** 集群模式 */
    @NestedConfigurationProperty
    private ClusterServersConfig cluster = new ClusterServersConfig();
    /** 主从模式 */
    @NestedConfigurationProperty
    private MasterSlaveServersConfig masterSlave = new MasterSlaveServersConfig();
    /** 哨兵模式 */
    @NestedConfigurationProperty
    private SentinelServersConfig sentinel = new SentinelServersConfig();
    /** 云托管模式 */
    @NestedConfigurationProperty
    private ReplicatedServersConfig replicated = new ReplicatedServersConfig();

    @Getter
    @Setter
    private static class BaseConfig {

        /** 连接空闲超时时间，默认值：10000 ms **/
        /**
         * If pooled connection not used for a <code>timeout</code> time
         * and current connections amount bigger than minimum idle connections pool size,
         * then it will closed and removed from pool.
         * Value in milliseconds.
         */
        private int idleConnectionTimeout = 10000;

        /** 连接超时时间，默认值：10000 ms **/
        /**
         * Timeout during connecting to any Redis server.
         * Value in milliseconds.
         */
        private int connectTimeout = 10000;

        /** 命令等待超时时间，默认值：3000 ms **/
        /**
         * Redis server response timeout. Starts to countdown when Redis command was succesfully sent.
         * Value in milliseconds.
         */
        private int timeout = 3000;

        /** 命令失败重试次数，默认值：3 **/
        private int retryAttempts = 3;

        /** 命令重试发送时间间隔，默认值：1500 ms **/
        private int retryInterval = 1500;

        /** Redis 实例，用户名 **/
        private String username = null;

        /** Redis 实例密码，默认为null **/
        private String password = null;

        /** 单个连接最大订阅数量，默认值为：5 **/
        private int subscriptionsPerConnection = 5;

        /** 客户端名称，默认值：null **/
        private String clientName = null;

        /** 启用 SSL 终端识别，默认值：true **/
        private boolean sslEnableEndpointIdentification = true;

        /** SSL 实现方式，默认值：JDK **/
        private SslProvider sslProvider = SslProvider.JDK;

        /** SSL 信任证书库路径，默认值：null **/
        private URL sslTrustStore = null;

        /** SSL 信任证书库密码，默认值：null */
        private String sslTrustStorePassword = null;

        /** SSL 钥匙库路径，默认值：null */
        private URL sslKeystore = null;

        /** SSL 钥匙库密码，默认值：null */
        private String sslKeystorePassword = null;

        /** PING 命令的发送时间间隔，默认值：0 ms */
        private int pingConnectionInterval = 0;

        /** 开启连接的 TCP KeepAlive 特性，默认值：false */
        private boolean keepAlive = false;

        /** 开启连接的 TCP NoDelay 特性，默认值：false */
        private boolean tcpNoDelay = true;
    }

    @Getter
    @Setter
    private static class BaseMasterSlaveServersConfig extends RedisRedissonProperty.BaseConfig {
        /** 负载均衡算法，默认值：round_robin */
        private RedissonLoadBalancerEnum loadBalancer = RedissonLoadBalancerEnum.ROUND_ROBIN;
        /** 主节点最小空闲连接数，默认值：32 */
        private int masterConnectionMinimumIdleSize = 32;
        /** 主节点连接池大小，默认值：64 */
        private int masterConnectionPoolSize = 64;
        /** 从节点最小空闲连接数，默认值：32 */
        private int slaveConnectionMinimumIdleSize = 32;
        /** 从节点连接池大小，默认值：64 */
        private int slaveConnectionPoolSize = 64;
        /** 当第一个 Redis 命令执行失败的时间间隔到达该值时，从节点将被排除在可用节点的内部列表中，默认值：60000 ms */
        private int failedSlaveCheckInterval = 60000;
        /** 当节点被排除在可用服务器的内部列表中时，从节点重新连接尝试的间隔，默认值：3000 ms */
        private int failedSlaveReconnectionInterval = 3000;
        /** 读取操作的负载均衡模式，默认值：slave */
        private ReadMode readMode = ReadMode.SLAVE;
        /** 订阅操作的负载均衡模式，默认值：master */
        private SubscriptionMode subscriptionMode = SubscriptionMode.MASTER;
        /** 从节点发布和订阅连接的最小空闲连接数，默认值：1 */
        private int subscriptionConnectionMinimumIdleSize = 1;
        /** 从节点发布和订阅连接池大小，默认值：50 */
        private int subscriptionConnectionPoolSize = 50;
        /** DNS 监测时间间隔，默认值：5000 ms */
        private long dnsMonitoringInterval = 5000;
    }

    @Getter
    @Setter
    public static class SingleServerConfig extends RedisRedissonProperty.BaseConfig {
        /** 节点地址，格式：redis://host:port */
        private String address = "redis://localhost:6379";
        /** 数据库编号，默认值：0 */
        private int database = 0;
        /** 最小空闲连接数，默认值：32 */
        private int connectionMinimumIdleSize = 32;
        /** 连接池大小，默认值：64 */
        private int connectionPoolSize = 64;
        /** 发布和订阅连接的最小空闲连接数，默认值：1 */
        private int subscriptionConnectionMinimumIdleSize = 1;
        /** 发布和订阅连接池大小，默认值：50 */
        private int subscriptionConnectionPoolSize = 50;
        /** DNS 监测时间间隔，默认值：5000 ms */
        private long dnsMonitoringInterval = 5000L;
    }

    @Getter
    @Setter
    public static class ClusterServersConfig extends BaseMasterSlaveServersConfig {
        /** 集群节点地址，格式：redis://host:port */
        private String[] nodeAddresses;
        /** 集群扫描间隔时间，默认值：1000 ms */
        private int scanInterval = 1000;
    }

    @Getter
    @Setter
    public static class MasterSlaveServersConfig extends BaseMasterSlaveServersConfig {
        /** 主节点地址，格式：redis://host:port */
        private String masterAddress;
        /** 从节点地址，格式：redis://host:port */
        private String[] slaveAddresses;
        /** 数据库编号，默认值：0 */
        private int database = 0;
    }

    @Getter
    @Setter
    public static class SentinelServersConfig extends BaseMasterSlaveServersConfig {
        /** 哨兵节点地址，格式：redis://host:port */
        private String[] sentinelAddresses;
        /** 主服务器的名称，默认值：null */
        private String masterName = null;
        /** 哨兵扫描间隔时间，默认值：1000 ms */
        private int scanInterval = 1000;
        /** 数据库编号，默认值：0 */
        private int database = 0;
    }

    @Getter
    @Setter
    public static class ReplicatedServersConfig extends BaseMasterSlaveServersConfig {
        /** 集群节点地址，格式：redis://host:port */
        private String[] nodeAddresses;
        /** 主节点变化扫描间隔时间，默认值：1000 ms */
        private int scanInterval = 1000;
        /** 数据库编号，默认值：0 */
        private int database = 0;
    }

}
