package com.nixixi.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloHttpServlet extends HttpServlet {

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

    String name = req.getParameter("name");

    resp.setContentType("application/json;charset=utf-8");
    resp.setCharacterEncoding("UTF-8");
    PrintWriter out = resp.getWriter();
    out.println(name + req.getAttribute("token"));
    out.flush();
    out.close();
  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    // TODO Auto-generated method stub
    super.doPost(req, resp);
  }

  
}
