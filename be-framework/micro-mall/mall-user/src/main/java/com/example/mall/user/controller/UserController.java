package com.example.mall.user.controller;

import java.security.NoSuchAlgorithmException;
import java.util.Date;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.mall.common.common.ApiRestResponse;
import com.example.mall.common.common.Constant;
import com.example.mall.common.exception.MallException;
import com.example.mall.common.exception.MallExceptionEnum;
import com.example.mall.user.model.pojo.User;
import com.example.mall.user.model.request.UserRegisterReq;
import com.example.mall.user.model.request.UserUpdateReq;
import com.example.mall.user.service.UserService;

@RestController
public class UserController {

  @Autowired
  UserService userService;

  @PostMapping("/user/register")
  public ApiRestResponse register(@RequestBody UserRegisterReq req) throws MallException, NoSuchAlgorithmException {

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
  public ApiRestResponse<User> login(@RequestBody UserRegisterReq req, HttpSession session)
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

  @PostMapping("/user/loginWithToken")
  public ApiRestResponse<String> loginWithToken(@RequestBody UserRegisterReq req, HttpSession session)
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

    // 设置 JWT Token
    Algorithm algorithm = Algorithm.HMAC256(Constant.JWT_KEY);

    String token = JWT.create()
        .withClaim(Constant.USER_ID, user.getId())
        .withExpiresAt(new Date(System.currentTimeMillis() + Constant.EXPIRE_TIME))
        .sign(algorithm);

    return ApiRestResponse.success(token);
  }

  @PostMapping("/user/updateUserInfo")
  public ApiRestResponse updateUserInfo(@RequestBody() UserUpdateReq req)
      throws MallException {

    String signature = req.getSignature();

    User currentUser = null;

    if (currentUser == null) {
      return ApiRestResponse.error(MallExceptionEnum.NEED_LOGIN);
    }

    User updateUser = new User();
    updateUser.setId(currentUser.getId());
    updateUser.setPersonalizedSignature(signature);
    userService.updateUserInfo(updateUser);
    return ApiRestResponse.success();
  }
}
