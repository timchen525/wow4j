package com.wow4j.business.config.redisson.property;


import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * redis 不同的连接方式，默认配置都不一样
 *
 * 集群方式有：
 * 1. 单点方式（SingleServerConfig） 2.主从方式（MasterSlaveServersConfig） 3.哨兵方式（SentinelServersConfig） 4.集群方式（ClusterServersConfig）
 * @author wow
 */
@ConfigurationProperties(prefix = RedissonProperty.SPRING_REDISSON_PREFIX)
@Component
@Data
public class RedissonProperty {

    public static final String SPRING_REDISSON_PREFIX = "spring.redisson";

    // redis 链接地址
    private String address;

    // 最小空闲连接数（默认值：10，最小保持连接数【长连接】）
    private int connectionMinimumIdleSize;

    // 连接空闲超时，单位：毫秒；默认：10000，当前连接池的连接数量超过了最小空闲连接数。
    // 而连接空闲时间超过了该数值，这些连接将会自动被关闭，并从连接池去掉
    private int idleConnectionTimeout;

    // ping 节点超时，单位：毫秒；默认：1000
    private int pingTimeout;

    // 连接等待超时，单位：毫秒；默认：10000
    private int connectTimeout;

    // 命令等待超时，单位：毫秒；默认：3000；等待节点回复命令的时间。该时间从命令发送成功时开始计时
    private int timeout;

    // 命令失败重试次数，默认值：3
    private int retryAttempts;

    // 命令重试时间间隔，单位：毫秒；默认值：1500
    private int retryInterval;

    // 重新连接时间间隔，单位：毫秒；默认值：3000；连接断开时，等待与其重新连接的时间间隔
    private int reconnectionTimeout;

    // 执行失败最大次数，默认值：3；失败后直到 reconnectionTimeout 超时以后再次尝试
    private int failedAttempts;

    // 身份验证密码
    private String password;

    // 单个连接最大订阅数量，默认值：5
    private int subscriptionPerConnection;

    // 客户名称
    private String clientName;

    // 长期保持一定数量的发布订阅连接是必须的
    private int subscriptionConnectionMinimumIdleSize;

    // 发布和订阅连接池大小；默认值：50
    private int subscriptionConnectionPoolSize;

    // 连接池大小；默认值：50
    private int connectionPoolSize;

    // 数据库编号；默认值：0
    private int database;

    // 是否启用 DNS 监测，默认值：false
    private boolean dnsMonitoring;

    // DNS 监测时间间隔，单位：毫秒；默认值：5000
    private int dnsMonitoringInterval;

    // 当前处理器核数量 * 2
    private int thread;
}
