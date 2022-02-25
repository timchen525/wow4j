package com.wow4j.business.config.cache.local.caffeine;

import com.github.benmanes.caffeine.cache.Caffeine;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.caffeine.CaffeineCache;
import org.springframework.cache.support.SimpleCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

/**
 * 本地缓存 caffeine 配置
 *
 * 参考文献：https://github.com/zheng-zy/spring-boot-redis-guava-caffeine-cache/blob/master/spring-boot-caffeine-cache/src/main/java/com/km/config/CacheConfig.java
 */
@Configuration
@EnableCaching
public class CaffeineConfig {

    /**
     * 配置各个缓存的实例
     */
    @Bean
    public CacheManager cacheManager() {
        SimpleCacheManager simpleCacheManager = new SimpleCacheManager();
        // 把各个 cache 注册到 cacheManager 中， CaffeineCache 实现了 org.springframework.cache.Cache 接口
        ArrayList<CaffeineCache> caches = new ArrayList<>();
        for (Caches c : Caches.values()) {
            caches.add(new CaffeineCache(c.name(),
                    Caffeine.newBuilder().recordStats().expireAfterWrite(c.getTtl(), TimeUnit.SECONDS).maximumSize(c.getMaxSize()).build()));
        }
        simpleCacheManager.setCaches(caches);
        return simpleCacheManager;
    }

    private static final int DEFAULT_MAXSIZE = 1000;
    private static final int DEFAULT_TTL = 3600;

    /**
     * 定义cache名称、超时时长秒、最大个数
     * 每个cache缺省3600秒过期，最大个数1000
     */
    public enum Caches {
        user(60, 2),
        info(5),
        role;

        private int maxSize = DEFAULT_MAXSIZE;    //最大數量
        private int ttl = DEFAULT_TTL;        //过期时间（秒）

        Caches() {
        }

        Caches(int ttl) {
            this.ttl = ttl;
        }

        Caches(int ttl, int maxSize) {
            this.ttl = ttl;
            this.maxSize = maxSize;
        }

        public int getMaxSize() {
            return maxSize;
        }

        public void setMaxSize(int maxSize) {
            this.maxSize = maxSize;
        }

        public int getTtl() {
            return ttl;
        }

        public void setTtl(int ttl) {
            this.ttl = ttl;
        }
    }
}












