package com.nixixi.demo;

import java.io.InputStream;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import com.nixixi.demo.dao.ProductMapper;
import com.nixixi.demo.pojo.Product;

// 动态参数拼接
// insert
// update
// select
public class TestDynamic {
  public static void main(String[] args) {
    InputStream inputStream = App.class.getClassLoader().getResourceAsStream("config.xml");
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
    SqlSession sqlSession = sqlSessionFactory.openSession();

    ProductMapper productMapper = sqlSession.getMapper(ProductMapper.class);

    Product product = new Product();
    System.out.println(productMapper.selectByColumnSelective(product));
    sqlSession.close();
  }
  
}
