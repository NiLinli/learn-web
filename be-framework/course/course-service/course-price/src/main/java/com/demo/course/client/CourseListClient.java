package com.demo.course.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.Primary;
import org.springframework.web.bind.annotation.PostMapping;

import com.demo.course.model.pojo.Course;

// 服务不可用时候 使用 fallback class 去处理
@FeignClient(value= "course-list", fallback = CourseListClientHystrix.class)
@Primary
public interface CourseListClient {
  
  @PostMapping("course/list")
  List<Course> getCourseList();
}
