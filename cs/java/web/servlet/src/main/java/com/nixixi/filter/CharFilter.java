package com.nixixi.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

public class CharFilter implements Filter {

  public CharFilter() {
    System.out.println("CharFilter");
  }

  @Override
  public void init(FilterConfig filterConfig) throws ServletException {
    System.out.println("CharFilter init");
  }

  @Override
  public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
      throws IOException, ServletException {
    request.setCharacterEncoding("UTF-8");

    // 没有 setParameter
    request.setAttribute("token", "1234566");
    response.setCharacterEncoding("UTF-8");
    chain.doFilter(request, response);

    // 如果需要停止
    HttpServletResponse httpServletResponse = (HttpServletResponse) response;
    httpServletResponse.setStatus(401);
    httpServletResponse.getWriter().write("");
  }

  @Override
  public void destroy() {
    System.out.println("CharFilter destroy");
  }

}
