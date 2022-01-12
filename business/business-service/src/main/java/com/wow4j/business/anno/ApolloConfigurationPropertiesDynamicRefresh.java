package com.wow4j.business.anno;

import org.springframework.cloud.context.config.annotation.RefreshScope;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@RefreshScope
public @interface ApolloConfigurationPropertiesDynamicRefresh {
}
