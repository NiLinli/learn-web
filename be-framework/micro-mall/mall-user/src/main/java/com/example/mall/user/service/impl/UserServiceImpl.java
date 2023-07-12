package com.example.mall.user.service.impl;

import java.security.NoSuchAlgorithmException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mall.common.exception.MallException;
import com.example.mall.common.exception.MallExceptionEnum;
import com.example.mall.user.dao.UserMapper;
import com.example.mall.user.model.pojo.User;
import com.example.mall.common.util.EncryptUtil;
import com.example.mall.user.service.UserService;

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  UserMapper userMapper;

  @Override
  public User getUser() {
    return userMapper.selectByPrimaryKey(1);
  }

  @Override
  public void register(String userName, String password) throws MallException, NoSuchAlgorithmException {
    // 查询用户名是否存在

    User[] result = userMapper.selectByUserName(userName);

    if (result.length != 0) {
      throw new MallException(MallExceptionEnum.NAME_EXISTED);
    }

    User user = new User();
    user.setUsername(userName);
    user.setPassword(EncryptUtil.getMD5String(password));

    int count = userMapper.insertSelective(user);

    if (count == 0) {
      throw new MallException(MallExceptionEnum.USER_INSERT_FAILED);
    }

  }

  @Override
  public User login(String userName, String password) throws MallException, NoSuchAlgorithmException {

    User user = userMapper.selectByLogin(userName, EncryptUtil.getMD5String(password));

    if (user == null) {
      throw new MallException(MallExceptionEnum.WRONG_PASSWORD);
    }

    return user;
  }

  @Override
  public void updateUserInfo(User user) throws MallException {

    int count = userMapper.updateByPrimaryKeySelective(user);

    if (count != 1) {
      throw new MallException(MallExceptionEnum.UPDATE_USER_INFO_FAILED);
    }
  }

  @Override
  public boolean checkAdminRole(int userId) {
    // 1 普通用户 2 管理员
    User user = userMapper.selectByPrimaryKey(userId);
    return user.getRole().equals(2);
  }
}
