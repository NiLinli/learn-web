package com.example.mall.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mall.exception.MallException;
import com.example.mall.exception.MallExceptionEnum;
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

  @Override
  public void register(String userName, String password) throws MallException {
    // 查询用户名是否存在

    User[] result = userMapper.selectByUserName(userName);

    if (result != null) {
      throw new MallException(MallExceptionEnum.NAME_EXISTED);
    }

    User user = new User();
    user.setUsername(userName);
    user.setPassword(password);

    int count = userMapper.insertSelective(user);

    if (count == 0) {
      throw new MallException(MallExceptionEnum.USER_INSERT_FAILED);
    }

  }
}
