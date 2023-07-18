package com.example.mall.order.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.example.mall.order.model.pojo.Cart;
import com.example.mall.order.model.vo.CartVO;

public interface CartMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Cart record);

    int insertSelective(Cart record);

    Cart selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Cart record);

    int updateByPrimaryKey(Cart record);

    List<CartVO> selectList(@Param("userId") Integer userId);

    Cart selectCartByUserIdAndProductId(@Param("userId") Integer userId, @Param("productId") Integer productId);

    List<CartVO> selectCartByUserIdAndProductIds(@Param("userId") Integer userId, @Param("productIds") Integer[] productIds);
}