package com.nixixi.model;

import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

import lombok.Data;

@Data
public class Person {
  @NotEmpty(message = "用户名不能为空")
  private String name;

  private int age;

  @Email
  private String email;
}
