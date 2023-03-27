package com.nixixi.model;

import java.util.List;

import lombok.Data;

// 只能给对象属性赋值
// 不能给对象直接赋值
@Data
public class UserList {
  private List<User> users;
}
