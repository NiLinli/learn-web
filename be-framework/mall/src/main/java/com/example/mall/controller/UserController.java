package com.example.mall.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.mall.common.ApiRestResponse;
import com.example.mall.exception.MallException;
import com.example.mall.exception.MallExceptionEnum;
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

  @PostMapping("/register")
  @ResponseBody
  public ApiRestResponse register(
      @RequestParam("userName") String userName,
      @RequestParam("password") String password) throws MallException  {

    if (!StringUtils.hasText(userName)) {
      return ApiRestResponse.error(MallExceptionEnum.NEED_USER_NAME);
    }

    if (!StringUtils.hasText(password)) {
      return ApiRestResponse.error(MallExceptionEnum.NEED_PASSWORD);
    }

    userService.register(userName, password);
    return ApiRestResponse.success();

  }
}
