package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pojo.Student;
import com.example.demo.service.StudentService;

@RestController
public class StudentController {
  @Autowired
  StudentService studentService;

  @GetMapping("/student")
  public String getStudentById(@RequestParam Integer id) {
    Student stu = studentService.getStudent(id);
    return stu.toString();
  
  }
}
