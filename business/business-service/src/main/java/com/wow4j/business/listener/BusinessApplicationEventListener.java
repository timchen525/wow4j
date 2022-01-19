package com.wow4j.business.listener;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.event.ContextClosedEvent;
import org.springframework.context.event.ContextStoppedEvent;
import org.springframework.stereotype.Component;

/**
 * 事件监听事件
 */
@Component
@Slf4j
public class BusinessApplicationEventListener implements ApplicationListener<ApplicationEvent> {

    @Override
    public void onApplicationEvent(ApplicationEvent event) {
        if (event instanceof ApplicationReadyEvent) {// 应用已启动完成
            ConfigurableApplicationContext context = ((ApplicationReadyEvent)event).getApplicationContext();
            log.info("应用启动完成");
//            context.getBean(SysCacheService.class).flush();
//            context.getBean(SysUserService.class).init();
        } else if (event instanceof ContextStoppedEvent) { // 应用停止
            log.info("应用停止");
//            DubboShutdownHook.getDubboShutdownHook().doDestroy();
        } else if (event instanceof ContextClosedEvent) { // 应用关闭
            log.info("应用关闭");
//            DubboShutdownHook.getDubboShutdownHook().doDestroy();
        }
    }
}
