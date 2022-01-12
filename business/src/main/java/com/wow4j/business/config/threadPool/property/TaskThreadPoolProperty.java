package com.wow4j.business.config.threadPool.property;

import com.wow4j.business.anno.ApolloConfigurationPropertiesDynamicRefresh;
import com.wow4j.business.config.threadPool.property.base.BaseThreadPoolProperty;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 公共操作异步线程池
 *
 * <p>即 @Async 后面不跟任何具体的线程池名，会用这个线程池
 * 注意：针对Spring boot 1.5, 2.0 之后直接通过 spring.task 前缀配置</p>
 * @author tim
 */
@ConfigurationProperties(prefix = "thread-pools.task-thread-pool")
@Component
@Data
@ApolloConfigurationPropertiesDynamicRefresh
public class TaskThreadPoolProperty extends BaseThreadPoolProperty {

    /**
     * 线程池名称
     */
    private String threadGroupName = "taskThreadPool";

    /**
     * 线程名称前缀
     */
    private String threadNamePrefix = "task2-";

    /**
     * 核心线程个数
     */
    private Integer corePoolSize = 2;

    /**
     * 队列长度
     */
    private Integer queueCapacity = 100;

    /**
     * 最大线程数
     */
    private Integer maxPoolSize = 3;

    /**
     * 线程活跃时间（秒）
     */
    private Integer keepAliveSeconds = 5;

    /**
     * 拒绝策略
     *
     * @see com.wow4j.business.enums.ThreadPoolRejectedPolicyEnum
     */
    private String rejectedPolicy = "abortPolicy";
}
