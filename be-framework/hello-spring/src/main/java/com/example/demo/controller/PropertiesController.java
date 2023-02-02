package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PropertiesController {

  // 读取自定义配置文件中的值
  @Value("${school.grade}")
  Integer grade;

  static Integer age;

  @GetMapping("grade")
  public String getGradle() {
    return grade + "";
  }

  // 静态变量注入方式
  @Value("${school.age}")
  public void setAge(Integer age) {
    PropertiesController.age = age;
  }

}
