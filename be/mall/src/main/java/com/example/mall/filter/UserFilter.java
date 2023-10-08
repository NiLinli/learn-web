package com.example.mall.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.util.StringUtils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.mall.common.ApiRestResponse;
import com.example.mall.common.Constant;
import com.example.mall.exception.MallException;
import com.example.mall.exception.MallExceptionEnum;
import com.example.mall.model.pojo.User;
import com.example.mall.service.UserService;

public class UserFilter implements Filter {
  public static ThreadLocal<User> userThreadLocal = new ThreadLocal();
  public static User currentUser = new User();

  @Autowired
  UserService userService;

  @Override
  public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
      throws IOException, ServletException {

    HttpServletRequest httpRequest = (HttpServletRequest) request;
    
    String token = httpRequest.getHeader(Constant.JWT_TOKEN_HEADER);
    

    if (!StringUtils.hasText(token)) {
      HttpServletResponse httpServletResponse = (HttpServletResponse) response;
      httpServletResponse.setHeader(HttpHeaders.CONTENT_TYPE, "application/json; charset=utf-8");
      httpServletResponse.setCharacterEncoding("utf-8");
      httpServletResponse.getWriter().write(ApiRestResponse.error(MallExceptionEnum.NEED_LOGIN).toJSONString());
      return;
    }

    Algorithm algorithm = Algorithm.HMAC256(Constant.JWT_KEY);
    JWTVerifier verifier = JWT.require(algorithm).build();

    try {
      DecodedJWT jwt = verifier.verify(token);
      currentUser.setId(jwt.getClaim(Constant.USER_ID).asInt());
      userThreadLocal.set(currentUser);
    } catch (TokenExpiredException e) {
      throw new MallException(MallExceptionEnum.TOKEN_EXPIRED);
    } catch (JWTDecodeException e) {
      throw new MallException(MallExceptionEnum.TOKEN_ERROR);
    }

    chain.doFilter(request, response);

  }

}
