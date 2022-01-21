package com.wow4j.business.config.cache.remote.redis.redisson;

public interface Customizer<T> {
    void customize(T bean);
}
