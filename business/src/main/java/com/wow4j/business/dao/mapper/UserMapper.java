package com.wow4j.business.dao.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.wow4j.business.domain.entity.UserEntity;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface UserMapper extends BaseMapper<UserEntity> {

    List<UserEntity> selectUserById();
}
