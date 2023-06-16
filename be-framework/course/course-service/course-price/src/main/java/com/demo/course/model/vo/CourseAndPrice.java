package com.demo.course.model.vo;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseAndPrice {
  Integer id;
  String courseId;
  String name;
  Integer price; 
}
