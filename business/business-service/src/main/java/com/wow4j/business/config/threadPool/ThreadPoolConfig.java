package com.wow4j.business.config.threadPool;

import com.wow4j.business.config.threadPool.property.FileUploadThreadPoolProperty;
import com.wow4j.business.config.threadPool.property.TaskThreadPoolProperty;
import com.wow4j.business.config.threadPool.property.base.BaseThreadPoolProperty;
import com.wow4j.business.enums.ThreadPoolRejectedPolicyEnum;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.MDC;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.TaskDecorator;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

/**
 * 各类线程池的配置
 *
 * @author tim
 */
@Configuration
@EnableAsync
@Slf4j
public class ThreadPoolConfig {

    private TaskThreadPoolProperty taskThreadPoolProperty;
    private FileUploadThreadPoolProperty fileUploadThreadPoolProperty;

    @Autowired
    public ThreadPoolConfig(TaskThreadPoolProperty taskThreadPoolProperty,
                            FileUploadThreadPoolProperty fileUploadThreadPoolProperty) {
        this.taskThreadPoolProperty = taskThreadPoolProperty;
        this.fileUploadThreadPoolProperty = fileUploadThreadPoolProperty;
    }

    /**
     * 默认@Async 使用的线程池
     *
     * <p>
     *     如果你在代码中，直接使用
     *     ```
     *     @Async
     *     public void asyncPrint(){
     *          // 异步执行业务逻辑
     *     }
     *     ```
     * 则会默认使用这个线程池名称 "taskExecutor"
     * 注意：该方案适用于spring boot 1.5
     * </p>
     */
    @Bean(value = "taskExecutor")
    public ThreadPoolTaskExecutor taskExecutor() {
        return getThreadPoolTaskExecutor(taskThreadPoolProperty);
    }

    /**
     * 文件上传 线程池
     */
    @Bean(value = "fileUploadThreadPoolTaskExecutor")
    public ThreadPoolTaskExecutor fileUploadThreadPoolTaskExecutor() {
        return getThreadPoolTaskExecutor(fileUploadThreadPoolProperty);
    }

    /**
     * 根据线程池的属性值获取对应线程的设置
     *
     * @param baseThreadPoolProperties 线程池配置信息
     * @return 线程池
     */
    private ThreadPoolTaskExecutor getThreadPoolTaskExecutor(BaseThreadPoolProperty baseThreadPoolProperties) {
        ThreadPoolTaskExecutor threadPoolTaskExecutor = new ThreadPoolTaskExecutor();
        if (StringUtils.isNotBlank(baseThreadPoolProperties.getThreadGroupName())) {
            threadPoolTaskExecutor.setThreadGroupName(baseThreadPoolProperties.getThreadGroupName());
        }
        if (StringUtils.isNotBlank(baseThreadPoolProperties.getThreadNamePrefix())) {
            threadPoolTaskExecutor.setThreadNamePrefix(baseThreadPoolProperties.getThreadNamePrefix());
        }
        if (null != baseThreadPoolProperties.getCorePoolSize() && baseThreadPoolProperties.getCorePoolSize() > 0) {
            threadPoolTaskExecutor.setCorePoolSize(baseThreadPoolProperties.getCorePoolSize());
        }
        if (null != baseThreadPoolProperties.getQueueCapacity() && baseThreadPoolProperties.getQueueCapacity() > 0) {
            threadPoolTaskExecutor.setQueueCapacity(baseThreadPoolProperties.getQueueCapacity());
        }
        if (null != baseThreadPoolProperties.getMaxPoolSize() && baseThreadPoolProperties.getMaxPoolSize() > 0) {
            threadPoolTaskExecutor.setMaxPoolSize(baseThreadPoolProperties.getMaxPoolSize());
        }
        if (null != baseThreadPoolProperties.getKeepAliveSeconds() && baseThreadPoolProperties.getKeepAliveSeconds() > 0) {
            threadPoolTaskExecutor.setKeepAliveSeconds(baseThreadPoolProperties.getKeepAliveSeconds());
        }
        // 设置拒绝策略
        if (StringUtils.isNotBlank(baseThreadPoolProperties.getRejectedPolicy())) {
            ThreadPoolRejectedPolicyEnum threadPoolRejectedPolicyEnum = ThreadPoolRejectedPolicyEnum.toEnum(baseThreadPoolProperties.getRejectedPolicy());
            if (null != threadPoolRejectedPolicyEnum) {
                threadPoolTaskExecutor.setRejectedExecutionHandler(threadPoolRejectedPolicyEnum.getRejectedExecutionHandler());
            } else {
                log.warn("Not exist rejectedPolicy:{}, return threadPoolRejectedPolicyEnum null.", baseThreadPoolProperties.getRejectedPolicy());
            }
        }
        // 设置MdcRunnable
        threadPoolTaskExecutor.setTaskDecorator(new MdcTaskDecorator());
        return threadPoolTaskExecutor;
    }

    /**
     * 主线程traceId传入到子线程（注意：线程池池化）
     */
    private static final String TRACE_ID = "traceId";
    private static class MdcTaskDecorator implements TaskDecorator {

        @Override
        public Runnable decorate(Runnable runnable) {
            String traceId = MDC.get(TRACE_ID);
            return () -> {
                try {
                    MDC.put(TRACE_ID, traceId);
                    runnable.run();
                } finally {
                    MDC.remove(TRACE_ID);
                    MDC.clear();
                }
            };
        }
    }
}
