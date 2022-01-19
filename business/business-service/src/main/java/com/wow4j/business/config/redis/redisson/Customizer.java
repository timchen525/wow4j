package com.wow4j.business.config.redis.redisson;

public interface Customizer<T> {
    void customize(T bean);
}
