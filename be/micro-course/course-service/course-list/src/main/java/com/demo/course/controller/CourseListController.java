package com.demo.course.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.course.model.pojo.Course;
import com.demo.course.service.CourseListService;

@RestController
public class CourseListController {

  @Autowired 
  CourseListService courseListService;

  @PostMapping("course/list")
  public List<Course> getCourseList() {
    return courseListService.getCourseList();
  }
  
}
