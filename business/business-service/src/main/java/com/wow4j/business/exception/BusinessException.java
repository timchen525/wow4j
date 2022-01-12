package com.wow4j.business.exception;

import com.wow4j.business.BusinessApplication;

/**
 * 业务异常
 * <P>统一返回 SystemResponseCodeConst.SYSTEM_ERROR</P>
 */
public class BusinessException extends RuntimeException {

    public BusinessException() {
    }

    public BusinessException(String msg) {
        super(msg);
    }

    public BusinessException(String msg, Throwable cause) {
        super(msg, cause);
    }

    public BusinessException(Throwable cause) {
        super(cause);
    }

    public BusinessException(String msg, Throwable cause, boolean enableSupression, boolean writableStackTrace) {
        super(msg, cause, enableSupression, writableStackTrace);
    }
}
