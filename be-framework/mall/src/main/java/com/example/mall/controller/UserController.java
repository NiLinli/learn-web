package com.example.mall.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.mall.model.pojo.User;
import com.example.mall.service.UserService;

@Controller
public class UserController {

  @Autowired
  UserService userService;
  
  @GetMapping("/test")
  @ResponseBody
  public User personalPage() {
    return userService.getUser();
  }
}
