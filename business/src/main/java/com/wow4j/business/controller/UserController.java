package com.wow4j.business.controller;

import com.wow4j.business.constant.SwaggerTagConst;
import com.wow4j.business.domain.Response;
import com.wow4j.business.domain.dto.UserDTO;
import com.wow4j.business.domain.vo.UserVO;
import com.wow4j.business.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = {SwaggerTagConst.USER})
@RestController
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @ApiOperation(value = "根据 ID 查询用户信息", notes = "根据 ID 查询岗位 @author wow")
    @GetMapping("/Wow4j/user/{userId}")
    public Response<UserVO> queryById(@PathVariable Long userId) {
        UserDTO userDTO = userService.queryUserById(userId);
        UserVO userVO = UserVO.fromUserDTO(userDTO);
        return Response.success(userVO);
    }
}
