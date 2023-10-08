package com.example.mall.order.service;

import java.util.List;

import com.example.mall.order.model.vo.CartVO;

public interface CartService {

  List<CartVO> list(Integer userId);

  List<CartVO> add(Integer userId, Integer productId, Integer count);

  List<CartVO> update(Integer userId, Integer productId, Integer count);

  List<CartVO> delete(Integer userId, Integer productId);

  List<CartVO> listByProducts(Integer userId, Integer[] productIds);

}
