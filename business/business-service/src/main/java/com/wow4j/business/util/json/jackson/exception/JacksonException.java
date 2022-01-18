package com.wow4j.business.util.json.jackson.exception;

import com.wow4j.business.exception.tool.FormativeException;

public class JacksonException extends FormativeException {

    public JacksonException() {
        super();
    }

    public JacksonException(String message) {
        super(message);
    }

    public JacksonException(Throwable cause) {
        super(cause);
    }

    public JacksonException(String format, Object... arguments) {
        super(format, arguments);
    }
}
