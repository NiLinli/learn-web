package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pojo.Student;

import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class ParaController {
  @GetMapping("first")
  public String firstRequest() {
    return "Hello spring boot";
  }

  @GetMapping("para")
  public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
    return String.format("Hello %s!", name);
  }

  @PostMapping("json")
  public String postRequest(@RequestBody Student student) {
    return student.toString();
  }
}
