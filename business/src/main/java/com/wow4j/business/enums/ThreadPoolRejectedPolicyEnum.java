package com.wow4j.business.enums;

import lombok.Getter;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.RejectedExecutionHandler;
import java.util.concurrent.ThreadPoolExecutor;

/**
 * 线程池拒绝策略枚举
 *
 * @author chenjintian
 * @date 2019/9/27
 */
@Getter
public enum ThreadPoolRejectedPolicyEnum {

    /**
     * 拒绝策略为调用主线程来执行任务
     */
    CALLER_RUNS_POLICY("callerRunsPolicy",  new ThreadPoolExecutor.CallerRunsPolicy()),

    /**
     * 拒绝策略为抛弃任务，然后抛出异常
     */
    ABORT_POLICY("abortPolicy", new ThreadPoolExecutor.AbortPolicy()),

    /**
     * 丢弃最旧的任务
     */
    DISCARD_OLDEST_POLICY("discardOldestPolicy", new ThreadPoolExecutor.DiscardOldestPolicy()),

    /**
     * 直接丢弃要执行的任务
     */
    DISCARD_POLICY("discardPolicy", new ThreadPoolExecutor.DiscardPolicy())
    ;

    private String rejectedPolicy;
    private RejectedExecutionHandler rejectedExecutionHandler;

    ThreadPoolRejectedPolicyEnum(String rejectedPolicy, RejectedExecutionHandler rejectedExecutionHandler) {
        this.rejectedPolicy = rejectedPolicy;
        this.rejectedExecutionHandler = rejectedExecutionHandler;
    }

    public static Map<String, ThreadPoolRejectedPolicyEnum> map = new HashMap<>();

    static {
        for (ThreadPoolRejectedPolicyEnum threadPoolRejectedPolicyEnum : ThreadPoolRejectedPolicyEnum.values()) {
            map.put(threadPoolRejectedPolicyEnum.rejectedPolicy, threadPoolRejectedPolicyEnum);
        }
    }

    /**
     * 根据字符串策略获取对应的枚举拒绝类型
     */
    public static ThreadPoolRejectedPolicyEnum toEnum(String rejectedPolicy) {
        return map.get(rejectedPolicy);
    }
}
