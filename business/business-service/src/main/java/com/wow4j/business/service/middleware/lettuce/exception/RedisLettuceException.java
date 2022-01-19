package com.wow4j.business.service.middleware.lettuce.exception;

import com.wow4j.business.exception.tool.FormativeException;

public class RedisLettuceException extends FormativeException {

    public RedisLettuceException() {
        super();
    }

    public RedisLettuceException(String msg) {
        super(msg);
    }

    public RedisLettuceException(String msg, Throwable cause) {
        super(msg, cause);
    }

    public RedisLettuceException(Throwable cause) {
        super(cause);
    }

    public RedisLettuceException(String msg, Throwable cause, boolean enableSupression, boolean writableStackTrace) {
        super(msg, cause, enableSupression, writableStackTrace);
    }

    public RedisLettuceException(String format, Object... arguments) {
        super(format, arguments);
    }
}
