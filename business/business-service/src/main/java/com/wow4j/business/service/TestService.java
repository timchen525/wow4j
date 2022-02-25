package com.wow4j.business.service;

import lombok.extern.slf4j.Slf4j;
import org.apache.skywalking.apm.toolkit.trace.Tag;
import org.apache.skywalking.apm.toolkit.trace.Tags;
import org.apache.skywalking.apm.toolkit.trace.Trace;
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

    @Trace
    public String testTrace() {
        return "hello";
    }

    @Tags({@Tag(key = "param", value = "arg[0]"), @Tag(key = "name", value = "return")})
    public String testTags(String name) {
        return "";
    }
}
