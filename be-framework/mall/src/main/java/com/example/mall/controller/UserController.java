package com.example.mall.controller;

import java.security.NoSuchAlgorithmException;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.mall.common.ApiRestResponse;
import com.example.mall.common.Constant;
import com.example.mall.exception.MallException;
import com.example.mall.exception.MallExceptionEnum;
import com.example.mall.model.pojo.User;
import com.example.mall.model.request.RegisterReq;
import com.example.mall.model.request.UpdateUserInfoReq;
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

  @PostMapping("/user/register")
  @ResponseBody
  public ApiRestResponse register(@RequestBody RegisterReq req) throws MallException, NoSuchAlgorithmException {

    String userName = req.getUserName();
    String password = req.getPassword();

    if (!StringUtils.hasText(userName)) {
      return ApiRestResponse.error(MallExceptionEnum.NEED_USER_NAME);
    }

    if (!StringUtils.hasText(password)) {
      return ApiRestResponse.error(MallExceptionEnum.NEED_PASSWORD);
    }

    userService.register(userName, password);
    return ApiRestResponse.success();

  }

  @PostMapping("/user/login")
  @ResponseBody
  public ApiRestResponse<User> login(@RequestBody RegisterReq req, HttpSession session)
      throws NoSuchAlgorithmException, MallException {

    String userName = req.getUserName();
    String password = req.getPassword();

    if (!StringUtils.hasText(userName)) {
      return ApiRestResponse.error(MallExceptionEnum.NEED_USER_NAME);
    }

    if (!StringUtils.hasText(password)) {
      return ApiRestResponse.error(MallExceptionEnum.NEED_PASSWORD);
    }

    User user = userService.login(userName, password);
    user.setPassword(null);
    session.setAttribute(Constant.MALL_USER, user);
    return ApiRestResponse.success(user);
  }

  @PostMapping("/user/updateUserInfo")
  @ResponseBody
  public ApiRestResponse updateUserInfo(HttpSession session, @RequestBody() UpdateUserInfoReq req)
      throws MallException {

    String signature = req.getSignature();

    User currentUser = (User) session.getAttribute(Constant.MALL_USER);

    if (currentUser == null) {
      return ApiRestResponse.error(MallExceptionEnum.NEED_LOGIN);
    }

    if (!userService.checkAdminRole(currentUser)) {
      return ApiRestResponse.error(MallExceptionEnum.NEED_ADMIN);
    }

    User updateUser = new User();
    updateUser.setId(currentUser.getId());
    updateUser.setPersonalizedSignature(signature);
    userService.updateUserInfo(updateUser);

    return ApiRestResponse.success();

  }
}
