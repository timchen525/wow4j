package com.wow4j.business.exception;

import com.wow4j.business.exception.tool.FormativeException;

/**
 * 业务异常
 * <P>统一返回 SystemResponseCodeConst.SYSTEM_ERROR</P>
 */
public class BusinessException extends FormativeException {

    public BusinessException() {
        super();
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

    public BusinessException(String format, Object... arguments) {
        super(format, arguments);
    }
}
