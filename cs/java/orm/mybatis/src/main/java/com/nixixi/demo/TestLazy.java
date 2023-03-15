package com.nixixi.demo;

import java.io.InputStream;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import com.nixixi.demo.dao.CategoryMapper;
import com.nixixi.demo.dao.ProductMapper;
import com.nixixi.demo.pojo.Category;
import com.nixixi.demo.pojo.Product;

// association
// collection
// join 的表分成单独查询两次表 结构可以保持为和 join 映射的结果相同
// 不通过对应的 getter 查询懒加载的属性 不会去查第二次表
public class TestLazy {
  public static void main(String[] args) {
    InputStream inputStream = App.class.getClassLoader().getResourceAsStream("config.xml");
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
    SqlSession sqlSession = sqlSessionFactory.openSession();

    // ProductMapper productMapper = sqlSession.getMapper(ProductMapper.class);

    // Product product = productMapper.selectByPrimaryKeyLazy(2);

    // System.out.println(product.getName());
    // product.getCategory();

    CategoryMapper categoryMapper = sqlSession.getMapper(CategoryMapper.class);

    List<Category> categories = categoryMapper.selectListLazy();

    System.out.println(categories);

    sqlSession.close();
  }
}
