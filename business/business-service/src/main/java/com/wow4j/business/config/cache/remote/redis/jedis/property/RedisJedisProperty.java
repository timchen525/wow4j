package com.wow4j.business.config.cache.remote.redis.jedis.property;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**\
 * https://github.com/ipipman/JavaSpringBootSamples/blob/master/springboot-jedis-sample/src/main/resources/application.properties
 */
@ConfigurationProperties(prefix = "jedis")
@Component
@Data
public class RedisJedisProperty {

    private String host;

    private int port;

    private int timeout;

}
