package com.nixixi.demo.dao;

import java.util.List;

import com.nixixi.demo.pojo.Category;

public interface CategoryMapper {
   List<Category> selectListWithoutCollection();

   List<Category> selectList();

   List<Category> selectListLazy();

   Category selectByPrimaryKey(int key);
}
