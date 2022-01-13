package com.wow4j.business.config.apollo;

import com.ctrip.framework.apollo.enums.PropertyChangeType;
import com.ctrip.framework.apollo.model.ConfigChange;
import com.ctrip.framework.apollo.model.ConfigChangeEvent;
import com.ctrip.framework.apollo.spring.annotation.ApolloConfigChangeListener;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.boot.logging.LogLevel;
import org.springframework.boot.logging.LoggerConfiguration;
import org.springframework.boot.logging.LoggingSystem;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

/**
 * apollo 动态更新日志级别
 */
@Component
@Slf4j
@ConditionalOnBean(name = "loggingSystem")
public class ApolloLoggerDynamicRefreshConfig {

    private static final String LOGGER_LEVEL_PREFIX = "logging.level";

    @Autowired
    @SuppressWarnings("all")
    private LoggingSystem loggingSystem;

    @ApolloConfigChangeListener(interestedKeyPrefixes = LOGGER_LEVEL_PREFIX)
    private void apolloConfigChangeForLoggerUpdate(ConfigChangeEvent configChangeEvent) {

        try {
            ConfigChange configChange;
            for (String changeKey : configChangeEvent.changedKeys()) {
                configChange = configChangeEvent.getChange(changeKey);
                String namespace = configChange.getNamespace();
                String propertyName = configChange.getPropertyName();
                String oldValue = configChange.getOldValue();
                String newValue = configChange.getNewValue();
                PropertyChangeType changeType = configChange.getChangeType();
                log.info("apolloConfigChangeForLoggerUpdate config change, nameSpace:{}, propertyName:{}, oldValue:{}, new Value:{}, changeType:{}.",
                        namespace, propertyName, oldValue, newValue, changeType.toString());

                // apollo 删除操作，不做任何操作
                if (PropertyChangeType.DELETED == changeType) {
                    log.info("changeType is DELETE, just record and do nothing.");
                    continue;
                }
                String loggerName = propertyName;
                if (StringUtils.isBlank(loggerName) || !loggerName.startsWith(LOGGER_LEVEL_PREFIX)) {
                    log.warn("loggerName:{} or illegal.", loggerName);
                    continue;
                }
                String loglevel = newValue.toUpperCase();
                loggerName = loggerName.substring(loglevel.length() + 1);

                LoggerConfiguration loggerConfiguration = loggingSystem.getLoggerConfiguration(loggerName);
                if (null == loggerConfiguration) {
                    log.warn("loggerConfiguration is null, loggerName:{} illegal.", loggerName);
                    continue;
                }
                if (!supportLogLevels().contains(loglevel)) {
                    log.warn("loglevel:{} illegal, supportLogLevels:{}.", loglevel, supportLogLevels());
                    continue;
                }
                if (loggerConfiguration.getEffectiveLevel().equals(LogLevel.valueOf(loglevel)))  {
                    log.info("logLevel:{} not change.", loglevel);
                    continue;
                }
                // 更改相应的logLevel
                loggingSystem.setLogLevel(loggerName, LogLevel.valueOf(loglevel));
                log.info("Success change logName:{} from logLevel:{} to logLevel:{}.", loggerName, oldValue, loglevel);

            }
        } catch (Exception e) {
            log.warn("apolloConfigChangeForLoggerUpdate warn, warn msg:{}.", e.getMessage(), e);
        }
    }

    private List<String> supportLogLevels() {
        return loggingSystem.getSupportedLogLevels().stream().map(Enum::name).collect(Collectors.toList());
    }
}
