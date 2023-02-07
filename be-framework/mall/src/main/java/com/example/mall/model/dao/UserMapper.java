package com.example.mall.model.dao;

import org.apache.ibatis.annotations.Param;

import com.example.mall.model.pojo.User;

public interface UserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    User[] selectByUserName(String userName);

    User selectByLogin(@Param("userName") String userName, @Param("password") String password);
}