package com.nixixi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nixixi.model.User;

@Controller
@RequestMapping("/request")
@ResponseBody
public class RequestController {

  @RequestMapping(value = "/get1", method = RequestMethod.GET)
  public String testGet1(@RequestParam("name") String name, @RequestParam("age") int age) {
    return "RequestMapping get" + "name = " + name + " age = " + age;
  }

  // params 校验 query params 参数
  // name 存在
  // age 存在并且等于 10
  @GetMapping(value = "/get2", params = { "name", "age=10" })
  public String testGet2() {
    return "GetMapping get";
  }

  @GetMapping("/rest/{name}/{id}")
  public String rest(@PathVariable("name") String name, @PathVariable("id") String id) {
    return name + "  " + id;
  }

  @GetMapping("/cookie")
  public String cookie(@CookieValue("JSESSIONID") String haha) {
    return haha;
  }

  // query params 参数名和 Java Bean 属性自动匹配
  @GetMapping("/bean-param")
  public String beanParam(User user) {
    return user.getName() + " " + user.getAge() + " " + user.getAddress().getCity();
  }
}
