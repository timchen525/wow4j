package com.wow4j.business.handler;

import com.wow4j.business.constant.code.SystemResponseCodeConst;
import com.wow4j.business.domain.Response;
import com.wow4j.business.exception.BusinessException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.TypeMismatchException;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.FieldError;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.stream.Collectors;

/**
 * 全局异常拦截
 */
@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {

    /**
     * 全局异常处理流程
     */
    @ResponseBody
    @ExceptionHandler(Exception.class)
    public Response exceptionHandler(Exception e) {
        log.error("error:{}", e.getMessage(), e);

        // http 请求方式错误
        if (e instanceof HttpRequestMethodNotSupportedException) {
            return Response.wrap(SystemResponseCodeConst.REQUEST_METHOD_ERROR);
        }

        // 参数类型错误
        if (e instanceof TypeMismatchException) {
            return Response.wrap(SystemResponseCodeConst.ERROR_PARAM);
        }

        // json 格式错误
        if (e instanceof HttpMessageNotReadableException) {
            return Response.wrap(SystemResponseCodeConst.JSON_FORMAT_ERROR);
        }

        // 参数校验未通过
        if (e instanceof MethodArgumentNotValidException) {
            List<FieldError> fieldErrors = ((MethodArgumentNotValidException) e).getBindingResult().getFieldErrors();
            List<String> msgList = fieldErrors.stream().map(FieldError::getDefaultMessage).collect(Collectors.toList());
            return Response.wrap(SystemResponseCodeConst.ERROR_PARAM, String.join(",", msgList));
        }

        // 业务异常
        if (e instanceof BusinessException) {
            return Response.wrap(SystemResponseCodeConst.SYSTEM_ERROR);
        }
        return Response.wrap(SystemResponseCodeConst.SYSTEM_ERROR);
    }
}
