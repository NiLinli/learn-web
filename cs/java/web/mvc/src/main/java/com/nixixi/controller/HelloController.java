package com.nixixi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

  @RequestMapping("/hello")
  @ResponseBody
  public String index() {
    System.out.println("omg six");
    // 默认 DispatcherServlet -> ViewResolver -> JSP 转发或者重定向 balabala
    return "hello mvc";
  }

  @RequestMapping("/interceptor")
  @ResponseBody
  public String interceptor() {
    System.out.println("interceptor");
    return "hello interceptor";
  }
}
