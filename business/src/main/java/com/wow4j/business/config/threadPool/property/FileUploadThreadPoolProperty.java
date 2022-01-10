package com.wow4j.business.config.threadPool.property;

import com.wow4j.business.config.threadPool.property.base.BaseThreadPoolProperty;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 文件操作 异步线程池
 *
 * @author chenjintian
 */
@ConfigurationProperties(prefix = "thread-pools.file-upload-thread-pool")
@Component
@Data
public class FileUploadThreadPoolProperty extends BaseThreadPoolProperty {

    /**
     * 线程池名称
     */
    private String threadGroupName = "fileUploadThreadPool";

    /**
     * 线程名称前缀
     */
    private String threadNamePrefix = "fileUpload-";

    /**
     * 核心线程个数
     */
    private Integer corePoolSize = 5;

    /**
     * 队列长度
     */
    private Integer queueCapacity = 5;

    /**
     * 最大线程数
     */
    private Integer maxPoolSize = 100;

    /**
     * 线程活跃时间（秒）
     */
    private Integer keepAliveSeconds = 5;

    /**
     * 拒绝策略
     */
    private String rejectedPolicy = "callerRunsPolicy";
}
