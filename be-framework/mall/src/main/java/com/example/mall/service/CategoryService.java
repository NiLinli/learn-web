package com.example.mall.service;

import java.util.List;

import com.example.mall.model.request.AddCategoryReq;
import com.example.mall.model.request.PaginationReq;
import com.example.mall.model.request.UpdateCategoryReq;
import com.example.mall.model.vo.CategoryVO;
import com.github.pagehelper.PageInfo;

public interface CategoryService {
  void add(AddCategoryReq req);

  void update(UpdateCategoryReq req);

  void remove(Integer id);

  PageInfo list(PaginationReq req);

  List<CategoryVO> tree();
}
