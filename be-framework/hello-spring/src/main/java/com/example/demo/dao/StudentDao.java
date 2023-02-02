package com.example.demo.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import com.example.demo.pojo.Student;

@Repository
@Mapper
public interface StudentDao {

  @Select("SELECT * FROM students WHERE id = #{id}")
  Student findById(Integer id);
  
}
