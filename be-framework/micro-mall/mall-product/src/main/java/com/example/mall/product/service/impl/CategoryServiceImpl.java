package com.example.mall.product.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.example.mall.product.dao.CategoryMapper;
import com.example.mall.common.exception.MallException;
import com.example.mall.common.exception.MallExceptionEnum;
import com.example.mall.product.model.pojo.Category;
import com.example.mall.product.model.request.CategoryAddReq;
import com.example.mall.product.model.request.PaginationReq;
import com.example.mall.product.model.request.CategoryUpdateReq;
import com.example.mall.product.model.vo.CategoryVO;
import com.example.mall.product.service.CategoryService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Service
public class CategoryServiceImpl implements CategoryService {

  @Autowired
  CategoryMapper categoryMapper;

  @Override
  public void add(CategoryAddReq req) {
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
  public void update(CategoryUpdateReq req) {
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

  @Override
  public PageInfo list(PaginationReq req) {
    PageHelper.startPage(req.getPageNum(), req.getPageSize(), "type, order_num");
    List<Category> categories = categoryMapper.selectList();
    PageInfo pageInfo = new PageInfo<>(categories);
    return pageInfo;
  }

  @Override
  @Cacheable(value = "/micro-mall/category/tree")
  public List<CategoryVO> treeCategory(Integer parentId) {
    List<CategoryVO> listCategoryVos = new ArrayList<>();
    recursivelyCategoryVOs(listCategoryVos, parentId);
    return listCategoryVos;
  }

  private void recursivelyCategoryVOs(List<CategoryVO> listCategoryVos, Integer parentId) {
    List<Category> categoryList = categoryMapper.selectCategoriesByParentId(parentId);

    for (Category category : categoryList) {
      CategoryVO categoryVO = new CategoryVO();
      BeanUtils.copyProperties(category, categoryVO);
      listCategoryVos.add(categoryVO);
      recursivelyCategoryVOs(categoryVO.getChildCategories(), category.getId());
    }
  }
}
