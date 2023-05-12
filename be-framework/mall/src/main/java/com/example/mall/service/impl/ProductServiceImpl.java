package com.example.mall.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.example.mall.service.CategoryService;
import com.example.mall.service.ProductService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.example.mall.dao.CategoryMapper;
import com.example.mall.dao.ProductMapper;
import com.example.mall.exception.MallException;
import com.example.mall.exception.MallExceptionEnum;
import com.example.mall.model.pojo.Product;
import com.example.mall.model.query.ProductCListQuery;
import com.example.mall.model.request.ProductCListReq;
import com.example.mall.model.vo.CategoryVO;

@Service
public class ProductServiceImpl implements ProductService {

  @Autowired
  ProductMapper productMapper;

  @Autowired
  CategoryService categoryService;

  @Override
  public void add(Product addProduct) {
    Product productOld = productMapper.selectByName(addProduct.getName());

    if (productOld != null) {
      throw new MallException(MallExceptionEnum.PRODUCT_NAME_EXISTED);
    }

    int count = productMapper.insertSelective(addProduct);
    if (count == 0) {
      throw new MallException(MallExceptionEnum.PRODUCT_ADD_FAILED);
    }
  }

  @Override
  public void update(Product updateProduct) {
    Product productOld = productMapper.selectByPrimaryKey(updateProduct.getId());
    if (productOld == null) {
      throw new MallException(MallExceptionEnum.PRODUCT_UPDATE_FAILED);
    }

    int count = productMapper.updateByPrimaryKeySelective(updateProduct);
    if (count == 0) {
      throw new MallException(MallExceptionEnum.PRODUCT_UPDATE_FAILED);
    }

  }

  @Override
  public void remove(Integer id) {
    Product productOld = productMapper.selectByPrimaryKey(id);
    if (productOld == null) {
      throw new MallException(MallExceptionEnum.PRODUCT_DELETE_FAILED);
    }

    int count = productMapper.deleteByPrimaryKey(id);
    if (count == 0) {
      throw new MallException(MallExceptionEnum.PRODUCT_DELETE_FAILED);
    }
  }

  @Override
  public void batchUpdateSellStatus(Integer[] ids, Integer sellStatus) {
    productMapper.batchUpdateSellStatus(ids, sellStatus);
  }

  @Override
  public PageInfo listForAdmin(Integer pageNum, Integer pageSize) {
    PageHelper.startPage(pageNum, pageSize);
    List<Product> products = productMapper.selectListForAdmin();
    PageInfo pageInfo = new PageInfo<>(products);
    return pageInfo;
  }

  @Override
  public Product detail(Integer id) {
    Product product = productMapper.selectByPrimaryKey(id);
    return product;
  }

  @Override
  public PageInfo listForC(ProductCListReq req) {

    ProductCListQuery productCListQuery = new ProductCListQuery();

    productCListQuery.setKeyword(req.getKeyword());

    if (req.getCategoryId() != null) {
      List<CategoryVO> categoryVOs = categoryService.treeCategory(req.getCategoryId());
      ArrayList<Integer> categoryIds = new ArrayList<>();
      getCategoryIds(categoryVOs, categoryIds);
      productCListQuery.setCategoryIds(categoryIds);
    }

    Integer orderBy = req.getOrderBy();

    if (orderBy != null) {
      if (orderBy == 1) {
        PageHelper.startPage(req.getPageNum(), req.getPageSize(), "price desc");
      } else if (orderBy == 2) {
        PageHelper.startPage(req.getPageNum(), req.getPageSize(), "price asc");
      }
    } else {
      PageHelper.startPage(req.getPageNum(), req.getPageSize());
    }

    List<Product> products = productMapper.selectListForC(productCListQuery);
    PageInfo pageInfo = new PageInfo<>(products);
    return pageInfo;
  }

  private void getCategoryIds(List<CategoryVO> categoryVOs, ArrayList<Integer> categoryIds) {

    for (int i = 0; i < categoryVOs.size(); i++) {
      CategoryVO categoryVO = categoryVOs.get(i);

      if (categoryVO != null) {
        categoryIds.add(categoryVO.getId());

        getCategoryIds(categoryVO.getChildCategories(), categoryIds);
      }

    }

  }

}
