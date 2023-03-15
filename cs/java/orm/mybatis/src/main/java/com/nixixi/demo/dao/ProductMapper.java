package com.nixixi.demo.dao;

import java.util.List;

import com.nixixi.demo.pojo.Product;

public interface ProductMapper {
  Product selectByPrimaryKey(int key);
  Product selectByPrimaryKeyLazy(int key);
  List<Product> selectByColumnSelective(Product product);
  List<Product> selectByCategoryId(int key);

}
