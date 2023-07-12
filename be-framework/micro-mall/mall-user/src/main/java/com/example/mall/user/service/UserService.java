package com.example.mall.user.service;

import java.security.NoSuchAlgorithmException;

import com.example.mall.common.exception.MallException;
import com.example.mall.user.model.pojo.User;

public interface UserService {
  User getUser();

  void register(String userName, String password) throws MallException, NoSuchAlgorithmException;

  User login(String userName, String password) throws MallException, NoSuchAlgorithmException;

  void updateUserInfo(User user) throws MallException;

  boolean checkAdminRole(int userId);
}
