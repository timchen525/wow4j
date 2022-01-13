package com.wow4j.business.config.redis;

import com.ctrip.framework.apollo.core.utils.StringUtils;
import com.wow4j.business.config.redis.property.RedissonProperty;
import lombok.extern.slf4j.Slf4j;
import org.redisson.api.RedissonClient;
import org.redisson.config.Config;
import org.redisson.config.SingleServerConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@Slf4j
public class RedissonConfig {

    private RedissonProperty redissonProperty;

    @Autowired
    public RedissonConfig(RedissonProperty redissonProperty) {
        this.redissonProperty = redissonProperty;
    }

    @Bean
    public RedissonClient redissonClient() {
        log.info("redissonProperty config:{}.", redissonProperty);

        // 设置 redisson 的配置
        Config config = new Config();
        SingleServerConfig singleServerConfig = config.useSingleServer();

        if (StringUtils.isBlank(redissonProperty.getAddress())) {
            log.error("redis address:{} is blank.", redissonProperty.getAddress());
            return null;
        }
        singleServerConfig.setAddress(redissonProperty.getAddress());



        config.useSingleServer()  // 使用单点redis
                .setAddress(redissonProperty.getAddress());
        return null;
    }
}
