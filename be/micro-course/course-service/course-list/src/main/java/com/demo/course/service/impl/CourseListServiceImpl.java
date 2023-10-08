package com.demo.course.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.course.dao.CourseMapper;
import com.demo.course.model.pojo.Course;
import com.demo.course.service.CourseListService;

@Service
public class CourseListServiceImpl implements CourseListService {

  @Autowired
  CourseMapper courseMapper;

  @Override
  public List<Course> getCourseList() {
    return courseMapper.findValidCourses();
  }

}
