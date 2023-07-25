package com.demo.course.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.course.model.query.CoursePriceReq;
import com.demo.course.model.vo.CourseAndPrice;
import com.demo.course.service.CoursePriceService;

@RestController
public class CoursePriceController {

  @Autowired
  CoursePriceService coursePriceService;

  @PostMapping("course/price")
  public Integer getCoursePrice(@RequestBody CoursePriceReq req) {
    return coursePriceService.getCoursePrice(req.getCourseId());
  }

  @PostMapping("course/courseInPrice")
  public List<CourseAndPrice> getCourseInPrice() {
    return coursePriceService.getCourseAndPrices();
  }

}
