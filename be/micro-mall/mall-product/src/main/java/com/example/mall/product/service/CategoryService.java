package com.example.mall.product.service;

import java.util.List;

import com.example.mall.product.model.request.CategoryAddReq;
import com.example.mall.product.model.request.PaginationReq;
import com.example.mall.product.model.request.CategoryUpdateReq;
import com.example.mall.product.model.vo.CategoryVO;
import com.github.pagehelper.PageInfo;

public interface CategoryService {
  void add(CategoryAddReq req);

  void update(CategoryUpdateReq req);

  void remove(Integer id);

  PageInfo list(PaginationReq req);

  List<CategoryVO> treeCategory(Integer parentId);
}
