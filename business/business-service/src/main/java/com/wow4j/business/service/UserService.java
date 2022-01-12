package com.wow4j.business.service;

import com.wow4j.business.dao.UserDao;
import com.wow4j.business.domain.Response;
import com.wow4j.business.domain.dto.UserDTO;
import com.wow4j.business.domain.entity.UserEntity;
import com.wow4j.business.domain.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 用户服务类
 */
@Service
public class UserService {

    private UserDao userDao;

    @Autowired
    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    /**
     * 根据用户id查询用户信息
     */
    public UserDTO queryUserById(Long id) {
        UserEntity userEntity = userDao.selectById(id);
        UserDTO userDTO = UserDTO.fromUserEntity(userEntity);
        return userDTO;
    }
}
