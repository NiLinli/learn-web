package com.nixixi.demo;

import java.io.InputStream;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import com.nixixi.demo.dao.ProductMapper;
import com.nixixi.demo.pojo.Product;

// Cache hit
// 一级缓存 sqlSession 不能关闭
// 二级缓存 mapper 
public class TestCache {
  public static void main(String[] args) {
    InputStream inputStream = App.class.getClassLoader().getResourceAsStream("config.xml");
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

    SqlSession sqlSession = sqlSessionFactory.openSession();
    ProductMapper productMapper = sqlSession.getMapper(ProductMapper.class);

    Product product = new Product();
    product.setName("胡萝卜");
    
    System.out.println(productMapper.selectByColumnSelective(product));

    sqlSession.close();

    SqlSession sqlSession2 = sqlSessionFactory.openSession();
    ProductMapper productMapper2 = sqlSession2.getMapper(ProductMapper.class);
    System.out.println(productMapper2.selectByColumnSelective(product));
    sqlSession2.commit();
    sqlSession2.close();
  }
  
}
