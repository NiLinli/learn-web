package com.demo.course.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.demo.course.model.pojo.Course;

@Mapper
@Repository
public interface CourseMapper {

  @Select("SELECT * FROM course WHERE valid = 1")
  List<Course> findValidCourses();
  
}
