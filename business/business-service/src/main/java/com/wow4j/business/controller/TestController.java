package com.wow4j.business.controller;

import com.wow4j.business.config.threadPool.property.FileUploadThreadPoolProperty;
import com.wow4j.business.dao.mapper.UserMapper;
import com.wow4j.business.domain.entity.UserEntity;
import com.wow4j.business.service.TestService;
import com.wow4j.business.service.middleware.lettuce.RedisLettuceComponent;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
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


    @GetMapping("/hello")
    public String hello() {
        List<UserEntity> userEntities = userMapper.selectUserById();
        String test = redisLettuceComponent.get("test");
        log.info("test:{}", test);
        return "hello";
    }

    @GetMapping("/async")
    public String testAsync() {
        testService.asyncTest();
        return "success";
    }
}
