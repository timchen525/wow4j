package com.wow4j.business.util;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * spring bean工具类
 *
 * @author chenjintian
 * @date 2019/12/16
 */
@Component
@Slf4j
public class SpringBeanUtil implements ApplicationContextAware {

    /**
     * 上下文对象实例
     */
    private static ApplicationContext applicationContext = null;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        if (SpringBeanUtil.applicationContext == null) {
            SpringBeanUtil.applicationContext = applicationContext;
            if (null == SpringBeanUtil.applicationContext) {
                log.error("retry SpringBeanUtil.applicationContext is null");
            }
        }
    }

    /**
     * 获取applicationContext
     *
     * @return
     */
    public static ApplicationContext getApplicationContext() {
        return applicationContext;
    }

    /**
     * 通过name获取 Bean.
     *
     * @param name
     * @return
     */
    public static Object getBean(String name) {
        ApplicationContext applicationContext = getApplicationContext();
        if (applicationContext == null) {
            log.error("applicationContext is null, name:{}.", name);
            return null;
        }
        return applicationContext.getBean(name);
    }

    /**
     * 通过class获取Bean.
     *
     * @param clazz
     * @param <T>
     * @return
     */
    public static <T> T getBean(Class<T> clazz) {
        ApplicationContext applicationContext = getApplicationContext();
        if (applicationContext == null) {
            log.error("applicationContext is null, clazz:{}.", clazz.toString());
            return null;
        }
        return applicationContext.getBean(clazz);
    }

    /**
     * 通过name,以及Clazz返回指定的Bean
     *
     * @param name
     * @param clazz
     * @param <T>
     * @return
     */
    public static <T> T getBean(String name, Class<T> clazz) {
        ApplicationContext applicationContext = getApplicationContext();
        if (applicationContext == null) {
            log.error("applicationContext is null, name:{}, clazz is:{}.", name, clazz.toString());
            return null;
        }
        return applicationContext.getBean(name, clazz);
    }
}
