package com.demo.course.model.pojo;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CoursePrice {
  Integer id;
  String courseId;
  Integer price; 
}
