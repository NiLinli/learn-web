package com.example.mall.order.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mall.common.common.Constant.SaleStatus;
import com.example.mall.order.dao.CartMapper;
import com.example.mall.order.feign.ProductFeignClient;
import com.example.mall.common.exception.MallException;
import com.example.mall.common.exception.MallExceptionEnum;
import com.example.mall.order.model.pojo.Cart;
import com.example.mall.product.model.pojo.Product;
import com.example.mall.order.model.vo.CartVO;
import com.example.mall.order.service.CartService;

@Service
public class CartServiceImpl implements CartService {

  @Autowired
  CartMapper cartMapper;

  @Autowired
  ProductFeignClient productFeignClient;

  @Override
  public List<CartVO> list(Integer userId) {
    List<CartVO> cartVOs = cartMapper.selectList(userId);
    return cartVOs;
  }

  @Override
  public List<CartVO> add(Integer userId, Integer productId, Integer count) {
    validProduct(productId, count);
    Cart cart = cartMapper.selectCartByUserIdAndProductId(userId, productId);

    if (cart == null) {
      cart = new Cart();
      cart.setProductId(productId);
      cart.setUserId(userId);
      cart.setQuantity(count);
      cartMapper.insertSelective(cart);
    } else {
      Integer newCount = cart.getQuantity() + count;
      Cart newCart = new Cart();
      newCart.setId(cart.getId());
      newCart.setProductId(cart.getProductId());
      newCart.setUserId(cart.getUserId());
      newCart.setQuantity(newCount);
      cartMapper.updateByPrimaryKeySelective(newCart);
    }

    return list(userId);
  }

  @Override
  public List<CartVO> update(Integer userId, Integer productId, Integer count) {
    validProduct(productId, count);
    Cart cart = cartMapper.selectCartByUserIdAndProductId(userId, productId);

    if (cart == null) {
      throw new MallException(MallExceptionEnum.CART_UPDATE_FAILED);
    } else {
      Cart newCart = new Cart();
      newCart.setId(cart.getId());
      newCart.setProductId(cart.getProductId());
      newCart.setUserId(cart.getUserId());
      newCart.setQuantity(count);
      cartMapper.updateByPrimaryKeySelective(newCart);
    }
    return list(userId);
  }

  @Override
  public List<CartVO> delete(Integer userId, Integer productId) {
    Cart cart = cartMapper.selectCartByUserIdAndProductId(userId, productId);

    if (cart == null) {
      throw new MallException(MallExceptionEnum.CART_DELETE_FAILED);
    } else {
      cartMapper.deleteByPrimaryKey(cart.getId());
    }

    return list(userId);
  }

  @Override
  public List<CartVO> listByProducts(Integer userId ,Integer[] productIds) {
    List<CartVO> cartVOs = cartMapper.selectCartByUserIdAndProductIds(userId, productIds);
    return cartVOs;
  }


  private void validProduct(Integer productId, Integer count) {

    Product product = productFeignClient.detailForFeign(productId);

    if (product == null || product.getStatus() == SaleStatus.NOT_SALE) {
      throw new MallException(MallExceptionEnum.PRODUCT_NOT_SALE);
    }

    if (count > product.getStock()) {
      throw new MallException(MallExceptionEnum.PRODUCT_NOT_ENOUGH);
    }
  }
}