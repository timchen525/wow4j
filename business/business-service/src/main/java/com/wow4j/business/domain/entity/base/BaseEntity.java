package com.wow4j.business.domain.entity.base;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.Version;
import lombok.Data;

@Data
public class BaseEntity {

    /**
     * 删除标记（逻辑删除）=> 对用户透明
     */
    @TableLogic
    private Integer deleted;

    /**
     * 版本号（乐观锁） =》对用户透明
     */
    @Version
    private Integer version;

    /**
     * 更新人 ID
     */
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private String userIdUpdate;

    /**
     * 更新时间（自动填充）=》对用户透明
     */
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private Long timeUpdate;

    /**
     * 创建人 ID
     */
    @TableField(fill = FieldFill.INSERT)
    private String userIdCreate;

    /**
     * 创建时间（自动填充）=》对用户透明
     */
    @TableField(fill = FieldFill.INSERT)
    private Long timeCreate;
}
