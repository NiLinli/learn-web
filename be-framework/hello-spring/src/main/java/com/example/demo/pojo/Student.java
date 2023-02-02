package com.example.demo.pojo;

public class Student {
  Integer id;
  String name;

  public Student(Integer id, String name) {
    this.id = id;
    this.name = name;
  }

  public String toString() {

    return "id = " + id + ", name = " + name;
  }
}
