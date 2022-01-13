package com.wow4j.business.controller;

import com.wow4j.business.config.threadPool.property.FileUploadThreadPoolProperty;
import com.wow4j.business.dao.mapper.UserMapper;
import com.wow4j.business.domain.entity.UserEntity;
import com.wow4j.business.service.TestService;
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

    @GetMapping("/hello")
    public String hello() {
        List<UserEntity> userEntities = userMapper.selectUserById();
        return "hello";
    }

    @GetMapping("/async")
    public String testAsync() {
        testService.asyncTest();
        return "success";
    }
}