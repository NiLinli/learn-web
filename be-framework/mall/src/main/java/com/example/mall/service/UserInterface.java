package com.example.mall.service;

import com.example.mall.exception.MallException;
import com.example.mall.model.pojo.User;

public interface UserInterface {
  User getUser();

  void register(String userName, String password) throws MallException;
}
