package com.demo.course.client;

import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Component;

import com.demo.course.model.pojo.Course;

@Component
public class CourseListClientHystrix implements CourseListClient {
  @Override
  public List<Course> getCourseList() {
    System.out.println("CourseListClientHystrix");
    return Collections.emptyList();
  }
}
