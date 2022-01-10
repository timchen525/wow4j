package com.wow4j.business.domain.dto;

import com.wow4j.business.domain.entity.UserEntity;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

/**
 * User DTO
 */
@Data
@Slf4j
public class UserDTO {

    /**
     * 用户id
     */
    private Long userId;

    /**
     * 用户姓名
     */
    private String name;

    /**
     * 用户年龄
     */
    private Integer age;

    /**
     * 用户邮箱
     */
    private String email;

    /**
     * 是否删除
     */
    private Integer deleted;

    /**
     * UserEntity 装换成 UserDTO
     */
    public static UserDTO fromUserEntity(UserEntity userEntity) {
        if (null == userEntity) {
            log.warn("userEntity is null.");
            return null;
        }
        UserDTO userDTO = new UserDTO();
        userDTO.setUserId(userEntity.getId());
        userDTO.setName(userEntity.getName());
        userDTO.setAge(userEntity.getAge());
        userDTO.setEmail(userEntity.getEmail());
        userDTO.setDeleted(userEntity.getDeleted());
        return userDTO;
    }
}
