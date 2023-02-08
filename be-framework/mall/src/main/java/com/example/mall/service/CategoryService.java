package com.example.mall.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mall.dao.CategoryMapper;
import com.example.mall.exception.MallException;
import com.example.mall.exception.MallExceptionEnum;
import com.example.mall.model.pojo.Category;
import com.example.mall.model.request.AddCategoryReq;
import com.example.mall.model.request.UpdateCategoryReq;

@Service
public class CategoryService implements CategoryInterface {

  @Autowired
  CategoryMapper categoryMapper;

  @Override
  public void add(AddCategoryReq req) {
    Category category = new Category();

    BeanUtils.copyProperties(req, category);

    Category[] categories = categoryMapper.selectByName(category.getName());

    if (categories.length > 0) {
      throw new MallException(MallExceptionEnum.CATEGORY_DUPLICATE);
    }

    int count = categoryMapper.insertSelective(category);

    if (count == 0) {
      throw new MallException(MallExceptionEnum.CATEGORY_ADD_FAILED);
    }
  }

  @Override
  public void update(UpdateCategoryReq req) {
    Category category = new Category();
    BeanUtils.copyProperties(req, category);

    // 检查重名
    Category[] categories = categoryMapper.selectByName(category.getName());
    if (categories.length > 0) {
      throw new MallException(MallExceptionEnum.CATEGORY_DUPLICATE);
    }

    int count = categoryMapper.updateByPrimaryKeySelective(category);
    if (count == 0) {
      throw new MallException(MallExceptionEnum.CATEGORY_UPDATE_FAILED);
    }
  }

  @Override
  public void remove(Integer id) {
    int count = categoryMapper.deleteByPrimaryKey(id);
    if (count == 0) {
      throw new MallException(MallExceptionEnum.CATEGORY_REMOVE_FAILED);
    }
  }
}
