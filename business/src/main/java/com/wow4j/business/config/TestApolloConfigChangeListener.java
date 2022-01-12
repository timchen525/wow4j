package com.wow4j.business.config;

import com.ctrip.framework.apollo.Config;
import com.ctrip.framework.apollo.model.ConfigChangeEvent;
import com.ctrip.framework.apollo.spring.annotation.ApolloConfig;
import com.ctrip.framework.apollo.spring.annotation.ApolloConfigChangeListener;
import org.springframework.context.annotation.Configuration;

import java.util.Set;

@Configuration
public class TestApolloConfigChangeListener {

    @ApolloConfig
    private Config config;

    @ApolloConfigChangeListener
    private void configChangeListener(ConfigChangeEvent changeEvent) {
        Set<String> propertyNames = config.getPropertyNames();
        System.out.println("配置更改");
    }
}
