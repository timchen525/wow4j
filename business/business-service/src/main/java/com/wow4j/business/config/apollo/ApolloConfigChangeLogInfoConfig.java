package com.wow4j.business.config.apollo;

import com.ctrip.framework.apollo.enums.PropertyChangeType;
import com.ctrip.framework.apollo.model.ConfigChange;
import com.ctrip.framework.apollo.model.ConfigChangeEvent;
import com.ctrip.framework.apollo.spring.annotation.ApolloConfigChangeListener;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/**
 * apollo 配置变更打印info日志，便于排查定位问题
 */
@Component
@Slf4j
public class ApolloConfigChangeLogInfoConfig {

    @ApolloConfigChangeListener
    private void apolloConfigChangeListener(ConfigChangeEvent configChangeEvent) {
        try {
            for (String changeKey : configChangeEvent.changedKeys()) {
                ConfigChange configChange = configChangeEvent.getChange(changeKey);
                String namespace = configChange.getNamespace();
                String propertyName = configChange.getPropertyName();
                String oldValue = configChange.getOldValue();
                String newValue = configChange.getNewValue();
                PropertyChangeType changeType = configChange.getChangeType();

                log.info("apolloConfigChangeListener namespace:{}, propertyName:{}, changeType:{}, oldValue:{} to newValue:{}.",
                        namespace, propertyName,  changeType.toString(), oldValue, newValue);
            }
        } catch (RuntimeException e) {
            log.warn("apolloConfigChangeListener warn:{}.", e.getMessage(), e);
        }
    }
}
