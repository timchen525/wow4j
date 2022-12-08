package com.wow4j.business.config.apollo;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Component;

import java.util.concurrent.ThreadPoolExecutor;

/**
 * 线程池动态修改
 */
@Component
@Slf4j
public class ApolloThreadPoolDynamicRefreshConfig implements BeanPostProcessor {

    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        if (bean instanceof ThreadPoolTaskExecutor || bean instanceof ThreadPoolExecutor || bean instanceof org.apache.tomcat.util.threads.ThreadPoolExecutor) {
            log.info("beanName:{}, ThreadPool class name:{}.", beanName, bean.getClass().getSimpleName());
            return bean;
        }
        return bean;
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        return bean;
    }

}
