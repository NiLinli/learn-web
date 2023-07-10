package com.demo.course.model.pojo;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Course {
  Integer id;
  String courseId;
  String name;
  Integer valid; 
}
