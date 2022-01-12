package com.wow4j.business.config.myBatis;

import com.baomidou.mybatisplus.core.incrementer.IdentifierGenerator;
import com.wow4j.business.third.idgenerator.IdGeneratorThirdComponent;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * MyBatis-plus 配置 自定义 ID 生成器
 *
 * @author chenjintian
 */
@Component
@Slf4j
public class CustomIdGenerator implements IdentifierGenerator {

    private IdGeneratorThirdComponent idGeneratorThirdComponent;

    @Autowired
    public CustomIdGenerator (IdGeneratorThirdComponent idGeneratorThirdComponent) {
        this.idGeneratorThirdComponent = idGeneratorThirdComponent;
    }

    @Override
    public Number nextId(Object entity) {
        long id = idGeneratorThirdComponent.getUniqueId();
        if (log.isDebugEnabled()) {
            log.debug("CustomIdGenerator id:{}.", id);
        }
        return id;
    }
}
