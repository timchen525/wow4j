package com.wow4j.business.validator;

import com.wow4j.business.enums.BaseEnum;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = EnumValidator.class)// 自定义验证的处理类
public @interface ValidEnum {

    /**
     * 默认的错误提示信息
     *
     * @return String
     */
    String message() default "非法的枚举值";

    /**
     * 枚举类对象 必须实现BaseEnum接口
     *
     * @return
     */
    Class<? extends BaseEnum> enumClazz();

    /**
     * 是否必须
     *
     * @return boolean
     */
    boolean required() default false;

    //下面这两个属性必须添加 :不然会报错
    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
