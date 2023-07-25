package com.demo.course.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.dubbo.config.annotation.DubboReference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.course.dao.CoursePriceMapper;
import com.demo.course.model.pojo.Course;
import com.demo.course.model.vo.CourseAndPrice;
import com.demo.course.service.CourseListService;
import com.demo.course.service.CoursePriceService;

@Service
public class CoursePriceServiceImpl implements CoursePriceService {

  @Autowired
  CoursePriceMapper coursePriceMapper;

  @DubboReference
  CourseListService courseListService;

  @Override
  public Integer getCoursePrice(String courseId) {
    return coursePriceMapper.findCoursePrice(courseId);
  }

  @Override
  public List<CourseAndPrice> getCourseAndPrices() {
    List<Course> courses = courseListService.getCourseList();

    List<CourseAndPrice> courseAndPrices = new ArrayList<>();

    for (Course course : courses) {
      if (course != null) {
        Integer coursePrice = getCoursePrice(course.getCourseId());
        CourseAndPrice courseAndPrice = new CourseAndPrice();


        courseAndPrice.setId(course.getId());
        courseAndPrice.setCourseId(course.getCourseId());
        courseAndPrice.setName(course.getName());
        courseAndPrice.setPrice(coursePrice);
        courseAndPrices.add(courseAndPrice);
      }
    }

    return courseAndPrices;
  }

}
