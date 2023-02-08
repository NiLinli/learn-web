package com.example.mall.filter;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.mall.common.ApiRestResponse;
import com.example.mall.common.Constant;
import com.example.mall.exception.MallExceptionEnum;
import com.example.mall.model.pojo.User;
import com.example.mall.service.UserService;

public class AdminFilter implements Filter {

  @Autowired
  UserService userService;

  @Override
  public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
      throws IOException, ServletException {

    HttpServletRequest request2 = (HttpServletRequest) request;
    HttpSession session = request2.getSession();
    User cUser = (User) session.getAttribute(Constant.MALL_USER);

    

    if (cUser == null) {
      PrintWriter out = new HttpServletResponseWrapper((HttpServletResponse) response).getWriter();
      out.write(ApiRestResponse.error(MallExceptionEnum.NEED_LOGIN).toString());
      out.flush();

      out.close();
      return;
    }

    if (!userService.checkAdminRole(cUser)) {
      PrintWriter out = new HttpServletResponseWrapper((HttpServletResponse) response).getWriter();
      out.write(ApiRestResponse.error(MallExceptionEnum.NEED_ADMIN).toString());
      out.flush();
      out.close();
      return;

    }

    chain.doFilter(request, response);

  }

}
