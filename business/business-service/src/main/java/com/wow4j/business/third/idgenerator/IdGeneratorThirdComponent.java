package com.wow4j.business.third.idgenerator;

import org.apache.commons.lang3.RandomUtils;
import org.springframework.stereotype.Component;

/**
 * 全局 ID 生成器（第三方组件）
 */
@Component
public class IdGeneratorThirdComponent {

    /**
     * 获取全局 ID
     */
    public long getUniqueId() {
        // TODO 待接入第三方服务
        return RandomUtils.nextLong();
    }
}
