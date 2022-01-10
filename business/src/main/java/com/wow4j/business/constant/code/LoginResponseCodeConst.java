package com.wow4j.business.constant.code;

import com.wow4j.business.constant.code.base.ResponseCodeConst;

/**
 * 登录响应 code 常量
 */
public class LoginResponseCodeConst extends ResponseCodeConst {

    public LoginResponseCodeConst(int code, String msg) {
        super(code, msg);
    }

    public static final LoginResponseCodeConst LOGIN_ERROR = new LoginResponseCodeConst(1001, "您还未登录或登录失败，请重新登录！");

    public static final LoginResponseCodeConst NOT_HAVE_PRIVILEGES = new LoginResponseCodeConst(1002, "对不起，您没有权限哦！");
}
