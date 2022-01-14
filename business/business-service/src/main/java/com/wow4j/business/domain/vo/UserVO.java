package com.wow4j.business.domain.vo;

import com.wow4j.business.domain.dto.UserDTO;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

/**
 * 用户信息 VO
 */
@Data
@Slf4j
public class UserVO {

    @ApiModelProperty("用户主键ID")
    private Long userId;

    @ApiModelProperty("用户姓名")
    private String name;

    @ApiModelProperty("用户年龄")
    private Integer age;

    @ApiModelProperty("用户邮箱")
    private String email;

    /**
     * UserDTO 转换成 UserVO
     */
    public static UserVO fromUserDTO(UserDTO userDTO) {
        if (null == userDTO) {
            log.warn("userDTO is null.");
            return null;
        }
        UserVO userVO = new UserVO();
        userVO.setUserId(userDTO.getUserId());
        userVO.setName(userDTO.getName());
        userVO.setAge(userDTO.getAge());
        userVO.setEmail(userDTO.getEmail());
        return userVO;
    }
}
