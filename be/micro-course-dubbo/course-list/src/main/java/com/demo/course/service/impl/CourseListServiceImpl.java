package com.demo.course.service.impl;

import java.util.List;

import org.apache.dubbo.config.annotation.DubboService;
import org.springframework.beans.factory.annotation.Autowired;
import com.demo.course.dao.CourseMapper;
import com.demo.course.model.pojo.Course;
import com.demo.course.service.CourseListService;

@DubboService
public class CourseListServiceImpl implements CourseListService {

  @Autowired
  CourseMapper courseMapper;

  @Override
  public List<Course> getCourseList() {
    return courseMapper.findValidCourses();
  }

}
