package com.demo.course.service;

import java.util.List;

import com.demo.course.model.vo.CourseAndPrice;

public interface CoursePriceService {
  Integer getCoursePrice(String courseId);

  List<CourseAndPrice> getCourseAndPrices();
}
