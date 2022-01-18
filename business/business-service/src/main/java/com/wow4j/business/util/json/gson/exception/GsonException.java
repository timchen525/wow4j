package com.wow4j.business.util.json.gson.exception;

import com.wow4j.business.exception.tool.FormativeException;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class GsonException extends FormativeException {
    public GsonException() {
        super();
    }

    public GsonException(String message) {
        super(message);
    }

    public GsonException(Throwable cause) {
        super(cause);
    }

    public GsonException(String format, Object... arguments) {
        super(format, arguments);
    }
}