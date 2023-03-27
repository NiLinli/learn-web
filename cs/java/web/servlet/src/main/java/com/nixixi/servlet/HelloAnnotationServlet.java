package com.nixixi.servlet;

import java.io.IOException;

import javax.servlet.Servlet;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;


// embed tomcat 需要配置扫描

@WebServlet("/hello")
public class HelloAnnotationServlet implements Servlet {

  @Override
  public void init(ServletConfig config) throws ServletException {

  }

  @Override
  public ServletConfig getServletConfig() {
    return null;
  }

  @Override
  public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
    String id = req.getParameter("id");
    res.setContentType("application/json;charset=utf-8");
    res.getWriter().write("hello annotation servlet " + id);
  }

  @Override
  public String getServletInfo() {
    return null;
  }

  @Override
  public void destroy() {
    // 资源释放
  }

}
