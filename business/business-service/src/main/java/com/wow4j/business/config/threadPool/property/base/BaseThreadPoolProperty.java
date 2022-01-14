package com.wow4j.business.config.threadPool.property.base;

import com.wow4j.business.enums.ThreadPoolRejectedPolicyEnum;
import lombok.Data;

/**
 * 线程池基础信息
 *
 * @author chenjintian
 * @date 2020/1/17
 */
@Data
public class BaseThreadPoolProperty {

    /**
     * 线程池名称
     */
    private String threadGroupName;

    /**
     * 线程名称前缀
     */
    private String threadNamePrefix;

    /**
     * 核心线程个数
     */
    private Integer corePoolSize;

    /**
     * 队列长度
     */
    private Integer queueCapacity;

    /**
     * 最大线程数
     */
    private Integer maxPoolSize;

    /**
     * 线程活跃时间（秒）
     */
    private Integer keepAliveSeconds;

    /**
     * 拒绝策略
     *
     * @see ThreadPoolRejectedPolicyEnum
     */
    private String rejectedPolicy;
}
