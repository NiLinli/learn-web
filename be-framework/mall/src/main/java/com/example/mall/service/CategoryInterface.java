package com.example.mall.service;

import com.example.mall.model.request.AddCategoryReq;
import com.example.mall.model.request.UpdateCategoryReq;

public interface CategoryInterface {
  void add(AddCategoryReq req);

  void update(UpdateCategoryReq req);

  void remove(Integer id);
}
