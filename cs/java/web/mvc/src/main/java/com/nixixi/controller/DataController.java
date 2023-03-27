package com.nixixi.controller;

import java.util.Arrays;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nixixi.model.User;
import com.nixixi.model.UserList;

// @Controller
// @ResponseBody
// 等同于 
@RestController
@RequestMapping("/data")
public class DataController {

  @GetMapping("/baseType")
  // public String baseType(@RequestParam(value = "id", required = true,
  // defaultValue = 0) int id) {
  public String baseType(int id) {
    return id + "";
  }

  @GetMapping("/packageType")
  public String packageType(Integer id) {
    // Integer 可以为 null
    return id + "";
  }

  @GetMapping("/arrType")
  public String arrType(Integer[] id) {
    return Arrays.toString(id);
  }

  @GetMapping("/listType")
  public String listType(UserList userList) {
    return Arrays.toString(userList.getUsers().toArray());
  }

  @PostMapping("/json")
  public User json(@RequestBody User user) {
    user.setAge(18);
    return user;
  }

}
