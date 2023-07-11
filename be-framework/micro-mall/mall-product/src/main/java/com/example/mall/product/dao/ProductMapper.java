package com.example.mall.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.example.mall.model.pojo.Product;
import com.example.mall.model.query.ProductCListQuery;

public interface ProductMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Product record);

    int insertSelective(Product record);

    Product selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Product record);

    int updateByPrimaryKey(Product record);

    Product selectByName(String name);

    int batchUpdateSellStatus(@Param("ids") Integer[] ids, @Param("sellStatus") Integer sellStatus);

    List<Product> selectListForAdmin();

    List<Product> selectListForC(@Param("query") ProductCListQuery query);
}