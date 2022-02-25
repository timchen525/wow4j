package com.wow4j.business.config.cache.local.caffeine.util;

import com.wow4j.business.util.SpringBeanUtil;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;

/**
 * 本地缓存 caffeine 工具类
 */
public class CaffeineUtil {

    /**
     * 根据缓存名称获取对应缓存的bean
     */
    public static Cache getCache(String cacheName) {
        return SpringBeanUtil.getBean(CacheManager.class).getCache(cacheName);
    }
}
