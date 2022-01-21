package com.wow4j.business.config.cache.remote.redis.jedis;

import com.wow4j.business.config.cache.remote.redis.jedis.property.RedisJedisProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

/**
 * redis jedis 配置
 */
@Configuration
@Component
public class RedisJedisConfig {

    private RedisJedisProperty redisJedisProperty;

    @Autowired
    public RedisJedisConfig(RedisJedisProperty redisJedisProperty) {
        this.redisJedisProperty = redisJedisProperty;
    }

    @Bean
    @ConfigurationProperties("redis")
    public JedisPoolConfig jedisPoolConfig() {
        return new JedisPoolConfig();
    }

    @Bean(destroyMethod = "close")
    public JedisPool jedisPool() {
        JedisPool jedisPool = new JedisPool(jedisPoolConfig(), redisJedisProperty.getHost(), redisJedisProperty.getPort(), redisJedisProperty.getTimeout() * 1000);
        return jedisPool;
    }
}
