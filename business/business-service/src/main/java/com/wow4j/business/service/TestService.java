package com.wow4j.business.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class TestService {

    @Async
    public void asyncTest() {
        log.info("async test");
        System.out.println("hello async");
    }
}
