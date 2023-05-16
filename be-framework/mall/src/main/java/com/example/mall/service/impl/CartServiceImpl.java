package com.example.mall.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mall.common.Constant.SaleStatus;
import com.example.mall.dao.CartMapper;
import com.example.mall.dao.ProductMapper;
import com.example.mall.exception.MallException;
import com.example.mall.exception.MallExceptionEnum;
import com.example.mall.model.pojo.Cart;
import com.example.mall.model.pojo.Product;
import com.example.mall.model.vo.CartVO;
import com.example.mall.service.CartService;

@Service
public class CartServiceImpl implements CartService {

  @Autowired
  CartMapper cartMapper;

  @Autowired
  ProductMapper productMapper;

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


  private void validProduct(Integer productId, Integer count) {
    Product product = productMapper.selectByPrimaryKey(productId);

    if (product == null || product.getStatus() == SaleStatus.NOT_SALE) {
      throw new MallException(MallExceptionEnum.PRODUCT_NOT_SALE);
    }

    if (count > product.getStock()) {
      throw new MallException(MallExceptionEnum.PRODUCT_NOT_ENOUGH);
    }
  }
}
