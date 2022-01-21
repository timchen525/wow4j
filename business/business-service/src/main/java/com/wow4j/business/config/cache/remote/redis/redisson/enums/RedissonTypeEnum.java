package com.wow4j.business.config.cache.remote.redis.redisson.enums;

/**
 * Redis 服务端模式
 */
public enum RedissonTypeEnum {

    /**
     * 单点模式
     */
    SINGLE,

    /**
     * 集群模式
     */
    CLUSTER,

    /**
     * 主从模式
     */
    MASTER_SLAVE,

    /**
     * 哨兵模式
     */
    SENTINEL,

    /**
     * 云托管模式
     */
    REPLICATED,

    /**
     * 禁用 Redisson
     */
    NONE
}
