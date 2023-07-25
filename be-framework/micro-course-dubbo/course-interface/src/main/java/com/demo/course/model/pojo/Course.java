package com.demo.course.model.pojo;

import lombok.Data;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Course implements Serializable {
  Integer id;
  String courseId;
  String name;
  Integer valid; 
}
