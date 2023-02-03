package com.example.mall.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mall.model.dao.UserMapper;
import com.example.mall.model.pojo.User;

@Service
public class UserService implements UserInterface {

  @Autowired
  UserMapper userMapper;

  @Override
  public User getUser() {

    return userMapper.selectByPrimaryKey(1);
  }
}
