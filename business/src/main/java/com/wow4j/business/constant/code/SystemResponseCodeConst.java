package com.wow4j.business.constant.code;

import com.wow4j.business.constant.code.base.ResponseCodeConst;

/**
 * 系统响应 code 常量类
 */
public class SystemResponseCodeConst extends ResponseCodeConst {

    public SystemResponseCodeConst(int code, String msg) {
        super(code, msg);
    }

    public SystemResponseCodeConst(int code, String msg, boolean success) {
        super(code, msg, success);
    }

    public static final SystemResponseCodeConst SUCCESS = new SystemResponseCodeConst(1, "操作成功！", true);
    public static final SystemResponseCodeConst ERROR_PARAM = new SystemResponseCodeConst(101, "参数异常");
    public static final SystemResponseCodeConst ERROR_PARAM_ANY = new SystemResponseCodeConst(102, "%s参数异常!");
    public static final SystemResponseCodeConst SYSTEM_ERROR = new SystemResponseCodeConst(111, "系统错误");
    public static final SystemResponseCodeConst DEVELOPMENT = new SystemResponseCodeConst(112, "此功能正在开发");
    public static final SystemResponseCodeConst NOT_EXISTS = new SystemResponseCodeConst(113, "数据不存在");
    public static final SystemResponseCodeConst REQUEST_METHOD_ERROR = new SystemResponseCodeConst(114, "请求方式错误");
    public static final SystemResponseCodeConst JSON_FORMAT_ERROR = new SystemResponseCodeConst(115, "JSON 格式错误");



}
