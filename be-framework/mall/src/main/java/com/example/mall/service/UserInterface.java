package com.example.mall.service;

import java.security.NoSuchAlgorithmException;

import com.example.mall.exception.MallException;
import com.example.mall.model.pojo.User;

public interface UserInterface {
  User getUser();

  void register(String userName, String password) throws MallException, NoSuchAlgorithmException;

  User login(String userName, String password) throws MallException, NoSuchAlgorithmException;

  void updateUserInfo(User user) throws MallException;

  boolean checkAdminRole(User user);
}
