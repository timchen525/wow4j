package com.wow4j.business.dao;

import com.wow4j.business.dao.mapper.UserMapper;
import com.wow4j.business.domain.entity.UserEntity;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * User Dao 层
 */
@Component
@Slf4j
public class UserDao {

    private UserMapper userMapper;

    @Autowired
    public UserDao(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public UserEntity selectById(Long id) {
        if (null == id || id <= 0) {
            log.warn("id[{}] is null or <= 0.", id);
            return null;
        }
        return userMapper.selectById(id);
    }
}
