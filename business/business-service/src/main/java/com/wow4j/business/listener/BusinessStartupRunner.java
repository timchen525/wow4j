package com.wow4j.business.listener;

import com.wow4j.business.constant.code.base.ResponseCodeConst;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * 应用启动成功后执行的业务
 */
@Component
public class BusinessStartupRunner implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {
        ResponseCodeConst.init();
    }
}
