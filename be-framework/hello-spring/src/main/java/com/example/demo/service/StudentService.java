package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.StudentDao;
import com.example.demo.pojo.Student;

@Service
public class StudentService {

  @Autowired
  StudentDao studentDao;

  public Student getStudent(Integer id) {
    return studentDao.findById(id);
  }
}
