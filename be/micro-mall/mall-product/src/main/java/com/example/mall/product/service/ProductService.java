package com.example.mall.product.service;

import java.io.File;
import java.io.IOException;
import java.util.List;

import com.example.mall.product.model.pojo.Product;
import com.example.mall.product.model.request.ProductCListReq;
import com.github.pagehelper.PageInfo;

public interface ProductService {
  void add(Product product);

  void update(Product product);

  void remove(Integer id);

  void batchUpdateSellStatus(Integer[] ids, Integer sellStatus);

  PageInfo listForAdmin(Integer pageNum, Integer pageSize);

  Product detail(Integer id);

  PageInfo listForC(ProductCListReq req);

  void updateStock(Integer productId, Integer stock);

}
