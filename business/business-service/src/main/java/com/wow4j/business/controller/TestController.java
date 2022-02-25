package com.wow4j.business.controller;

import com.wow4j.business.config.threadPool.property.FileUploadThreadPoolProperty;
import com.wow4j.business.dao.mapper.UserMapper;
import com.wow4j.business.domain.entity.UserEntity;
import com.wow4j.business.service.TestService;
import com.wow4j.business.service.middleware.lettuce.RedisLettuceComponent;
import lombok.extern.slf4j.Slf4j;
import org.apache.skywalking.apm.toolkit.trace.ActiveSpan;
import org.apache.skywalking.apm.toolkit.trace.TraceContext;
import org.redisson.api.RedissonClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.cache.CacheProperties;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
public class TestController {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private TestService testService;
    @Autowired
    private FileUploadThreadPoolProperty fileUploadThreadPoolProperty;
    @Autowired
    private RedisLettuceComponent redisLettuceComponent;
    @Autowired(required = false) // 表明是非必须的bean
    private RedissonClient redissonClient;


    @GetMapping("/hello")
    public String hello() {
        List<UserEntity> userEntities = userMapper.selectUserById();

        String value =(String) redissonClient.getBucket("test").get();
        log.info("value:{}.", value);

        String test = redisLettuceComponent.get("test");
        log.info("test:{}", test);

        String test2 = redisLettuceComponent.get("test");
        log.info("test:{}", test);

        String value2 =(String) redissonClient.getBucket("test").get();
        log.info("value:{}.", value);


        String tt = testService.testTrace();
        return "hello";
    }

    @GetMapping("/async")
    public String testAsync() {
        testService.asyncTest();
        return "success";
    }

    @GetMapping("/traceId")
    public String getSkyWalkingTraceId() {
        // 使当前链路报错，并且提示报错信息
        ActiveSpan.error(new RuntimeException("Test-Error-Throwable"));

        // 打印 info 信息
        ActiveSpan.info("Test-Info-Msg");

        // 打印 debug 信息
        ActiveSpan.debug("Test-debug-Msg");

        // 获取 traceId
        String traceId = TraceContext.traceId();
        log.info("测试");
        return traceId;
    }
}
