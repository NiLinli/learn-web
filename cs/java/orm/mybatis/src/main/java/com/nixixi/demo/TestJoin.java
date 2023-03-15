package com.nixixi.demo;

import java.io.InputStream;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import com.nixixi.demo.dao.CategoryMapper;
import com.nixixi.demo.pojo.Category;

public class TestJoin {
  public static void main(String[] args) {
    InputStream inputStream = App.class.getClassLoader().getResourceAsStream("config.xml");
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
    SqlSession sqlSession = sqlSessionFactory.openSession();

    // 一对 1
    // association
    // ProductMapper productMapper = sqlSession.getMapper(ProductMapper.class);
    // System.out.println(productMapper.selectWithCategoryByPrimaryKey(2));
    // ();
    // sqlSession.close();

    // 一对多
    // collection
    CategoryMapper categoryMapper = sqlSession.getMapper(CategoryMapper.class);
    // List<Category> categories = categoryMapper.selectList();
    List<Category> categories = categoryMapper.selectListWithoutCollection();

    System.out.println(categories.size());

    for (Category category : categories) {
    System.out.println(category);
    }

    sqlSession.close();

  }

}
