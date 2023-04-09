package com.example.mall.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import com.example.mall.service.ProductService;

import com.example.mall.dao.CategoryMapper;
import com.example.mall.dao.ProductMapper;
import com.example.mall.exception.MallException;
import com.example.mall.exception.MallExceptionEnum;
import com.example.mall.model.pojo.Category;
import com.example.mall.model.pojo.Product;
import com.example.mall.model.request.AddCategoryReq;
import com.example.mall.model.request.PaginationReq;
import com.example.mall.model.request.UpdateCategoryReq;
import com.example.mall.model.vo.CategoryVO;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Service
public class ProductServiceImpl implements ProductService {

  @Autowired
  ProductMapper productMapper;

  @Override
  public void add(AddCategoryReq req) {
    Product product = new Product();
    BeanUtils.copyProperties(req, product);
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
  }

  // @Override
  // public PageInfo list(PaginationReq req) {
  // }

  @Override
  @Cacheable(value = "/category/tree")
  public List<CategoryVO> tree() {
    List<CategoryVO> listCategoryVos = new ArrayList<>();
    recursivelyCategoryVOs(listCategoryVos, 0);
    return listCategoryVos;
  }

  private void recursivelyCategoryVOs(List<CategoryVO> listCategoryVos, Integer parentId) {
  }
}
