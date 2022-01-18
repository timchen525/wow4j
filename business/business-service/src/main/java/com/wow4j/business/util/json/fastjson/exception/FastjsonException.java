package com.wow4j.business.util.json.fastjson.exception;

import com.wow4j.business.exception.tool.FormativeException;

public class FastjsonException extends FormativeException {

    public FastjsonException() {
        super();
    }

    public FastjsonException(String message) {
        super(message);
    }

    public FastjsonException(Throwable cause) {
        super(cause);
    }

    public FastjsonException(String format, Object... arguments) {
        super(format, arguments);
    }
}
