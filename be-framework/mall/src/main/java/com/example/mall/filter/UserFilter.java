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

import com.example.mall.common.ApiRestResponse;
import com.example.mall.common.Constant;
import com.example.mall.exception.MallExceptionEnum;
import com.example.mall.model.pojo.User;
import com.example.mall.service.UserService;

public class UserFilter implements Filter {
  public static User currentUser;

  @Autowired
  UserService userService;

  @Override
  public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
      throws IOException, ServletException {

    HttpServletRequest httpRequest = (HttpServletRequest) request;
    HttpSession session = httpRequest.getSession();
    currentUser = (User) session.getAttribute(Constant.MALL_USER);

    if (currentUser == null) {
      HttpServletResponse httpServletResponse = (HttpServletResponse) response;

      httpServletResponse.setHeader(HttpHeaders.CONTENT_TYPE, "application/json; charset=utf-8");
      httpServletResponse.setCharacterEncoding("utf-8");
      httpServletResponse.getWriter().write(ApiRestResponse.error(MallExceptionEnum.NEED_LOGIN).toJSONString());

      return;
    }

    chain.doFilter(request, response);

  }

}
