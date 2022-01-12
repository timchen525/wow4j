package com.wow4j.business.domain;

import com.wow4j.business.constant.code.SystemResponseCodeConst;
import com.wow4j.business.constant.code.base.ResponseCodeConst;
import lombok.Data;

/**
 * 响应数据
 */
@Data
public class Response<T> {

    protected Integer code;

    protected String msg;

    protected Boolean success;

    protected T data;

    public Response() {
    }

    public Response(ResponseCodeConst responseCodeConst, String msg) {
        this.code = responseCodeConst.getCode();
        this.msg = msg;
        this.success = responseCodeConst.isSuccess();
    }

    public Response(ResponseCodeConst responseCodeConst, T data) {
        super();
        this.code = responseCodeConst.getCode();
        this.msg = responseCodeConst.getMsg();
        this.data = data;
        this.success = responseCodeConst.isSuccess();
    }

    public Response(ResponseCodeConst responseCodeConst, T data, String msg) {
        super();
        this.code = responseCodeConst.getCode();
        this.msg = msg;
        this.data = data;
        this.success = responseCodeConst.isSuccess();
    }

    public Response(ResponseCodeConst responseCodeConst) {
        this.code = responseCodeConst.getCode();
        this.msg = responseCodeConst.getMsg();
        this.success = responseCodeConst.isSuccess();
    }

    public Response(Response response) {
        this.code = response.getCode();
        this.msg = response.getMsg();
        this.success = response.success;
    }

    public static <T> Response<T> success() {
        return new Response<>(SystemResponseCodeConst.SUCCESS);
    }

    public static <T> Response<T> success(T data, String msg) {
        return new Response(SystemResponseCodeConst.SUCCESS, data, msg);
    }

    public static <T> Response<T> success(T data) {
        return new Response<>(SystemResponseCodeConst.SUCCESS, data);
    }

    public static <T> Response<T> success(String msg) {
        return new Response<>(SystemResponseCodeConst.SUCCESS, msg);
    }

    public static <T> Response<T> wrap(ResponseCodeConst codeConst) {
        return new Response<>(codeConst);
    }

    public static <T> Response<T> wrap(ResponseCodeConst codeConst, T t) {
        return new Response<>(codeConst, t);
    }

    public static <T> Response<T> wrap(ResponseCodeConst codeConst, String msg) {
        return new Response<>(codeConst, msg);
    }

}
