package com.demo.course.dao;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;


@Mapper
@Repository
public interface CoursePriceMapper {

  @Select("SELECT price FROM course_price WHERE course_id = #{courseId}")
  Integer findCoursePrice(String courseId);
  
}
