package com.wow4j.business.config.apollo;


import com.ctrip.framework.apollo.Config;
import com.ctrip.framework.apollo.ConfigChangeListener;
import com.ctrip.framework.apollo.ConfigService;
import com.ctrip.framework.apollo.core.ConfigConsts;
import com.ctrip.framework.apollo.core.utils.StringUtils;
import com.ctrip.framework.apollo.model.ConfigChangeEvent;
import com.google.common.collect.Sets;
import com.wow4j.business.anno.ApolloConfigurationPropertiesDynamicRefresh;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.context.scope.refresh.RefreshScope;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.stereotype.Component;

/**
 * 实现 ConfigurationProperties 配置，使用 apollo 注解 ApolloConfigurationPropertiesDynamicRefresh 动态刷新
 */
@Component
@Slf4j
public class ApolloConfigurationPropertiesDynamicRefreshConfig implements BeanPostProcessor {

    @Autowired
    @SuppressWarnings("all")
    private RefreshScope refreshScope;

    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        try {
            if (null == bean || StringUtils.isEmpty(beanName)) {
                log.warn("bean is null or beanName:{} is empty.", beanName);
                return bean;
            }
            ApolloConfigurationPropertiesDynamicRefresh annotation = AnnotationUtils.findAnnotation(bean.getClass(), ApolloConfigurationPropertiesDynamicRefresh.class);
            if (null == annotation) {
                return bean;
            }
            log.info("Listener configurationProperties beanName:{}.", beanName);
            ConfigurationProperties configurationProperties = AnnotationUtils.findAnnotation(bean.getClass(), ConfigurationProperties.class);
            String prefix = configurationProperties.prefix();
            if (StringUtils.isBlank(prefix)) {
                log.warn("configurationProperties prefix:{} is blank.", prefix);
                return bean;
            }

            // 创建变跟监听事件
            ConfigChangeListener configChangeListener = new ConfigChangeListener() {
                @Override
                public void onChange(ConfigChangeEvent changeEvent) {
                    ApolloConfigurationPropertiesDynamicRefreshConfig.this.refreshScope.refresh(beanName);
                }
            };
            // 默认只支持命名空间 application
            Config config = ConfigService.getConfig(ConfigConsts.NAMESPACE_APPLICATION);
            config.addChangeListener(configChangeListener, null, Sets.newHashSet(prefix));
            return bean;
        } catch (Exception e) {
            log.warn("error message:{}.", e.getMessage(), e);
            return bean;
        }
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        return bean;
    }

}
