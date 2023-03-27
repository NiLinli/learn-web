package com.nixixi.servlet;

import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.Servlet;
import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class HelloServlet implements Servlet {

  public HelloServlet() {
    System.out.println("HelloServlet");
  }

  @Override
  public void init(ServletConfig config) throws ServletException {
    System.out.println("HelloServlet init");

    // 整个 webapp 的 context
    ServletContext webappContext = config.getServletContext();

    // 当前 servlet 一些配置
    System.out.println(config.getServletName());

    Enumeration<String> names = config.getInitParameterNames();
    while (names.hasMoreElements()) {
      String name = names.nextElement();
      System.out.println(name + " = " + config.getInitParameter(name));
    }

  }

  @Override
  public ServletConfig getServletConfig() {
    return null;
  }

  @Override
  public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
    String id = req.getParameter("id");
    res.setContentType("application/json;charset=utf-8");
    res.getWriter().write("hello servlet " + id);
  }

  @Override
  public String getServletInfo() {
    return null;
  }

  @Override
  public void destroy() {
    // 资源释放

    System.out.println("HelloServlet destroy");
  }

}
