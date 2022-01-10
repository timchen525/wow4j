package com.wow4j.business.config.myBatis.handler;

import com.baomidou.mybatisplus.core.handlers.MetaObjectHandler;
import com.wow4j.business.util.UserUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.reflection.MetaObject;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class MyMetaObjectHandler implements MetaObjectHandler {

    // 插入时的填充策略
    @Override
    public void insertFill(MetaObject metaObject) {
        if (log.isDebugEnabled()) {
            log.debug("start insert fill ...");
        }

        long currentTimeStamp = System.currentTimeMillis();
        this.setFieldValByName("userIdCreate", UserUtil.getCurrentUserId(), metaObject);
        this.setFieldValByName("timeCreate", currentTimeStamp, metaObject);
        this.setFieldValByName("userIdUpdate", UserUtil.getCurrentUserId(), metaObject);
        this.setFieldValByName("timeUpdate", currentTimeStamp, metaObject);

        if (log.isDebugEnabled()) {
            log.debug("end insert fill, userIdCreate:{}, timeCreate:{}, userIdUpdate:{}, timeUpdate:{}.",
                    UserUtil.getCurrentUserId(), currentTimeStamp, UserUtil.getCurrentUserId(), currentTimeStamp);
        }
    }

    // 更新时的填充策略
    @Override
    public void updateFill(MetaObject metaObject) {
        if (log.isDebugEnabled()) {
            log.debug("start update fill ...");
        }

        long currentTimeStamp = System.currentTimeMillis();
        this.setFieldValByName("userIdUpdate", UserUtil.getCurrentUserId(), metaObject);
        this.setFieldValByName("timeUpdate", currentTimeStamp, metaObject);

        if (log.isDebugEnabled()) {
            log.debug("end update fill, userIdUpdate:{}, timeUpdate:{}.", UserUtil.getCurrentUserId(), currentTimeStamp);
        }
    }
}
