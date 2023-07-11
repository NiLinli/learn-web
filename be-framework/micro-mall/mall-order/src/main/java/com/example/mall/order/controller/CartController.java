package com.example.mall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mall.common.ApiRestResponse;
import com.example.mall.filter.UserFilter;
import com.example.mall.model.request.CartAddOrUpdateReq;
import com.example.mall.model.request.CartDeleteReq;
import com.example.mall.model.vo.CartVO;
import com.example.mall.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {

  @Autowired
  CartService cartService;

  @PostMapping("/list")
  public ApiRestResponse list() {
    List<CartVO> cartVOs = cartService.list(UserFilter.currentUser.getId());
    return ApiRestResponse.success(cartVOs);
  }

  @PostMapping("/add")
  public ApiRestResponse add(@RequestBody CartAddOrUpdateReq req) {

    List<CartVO> cartVOs = cartService.add(UserFilter.currentUser.getId(), req.getProductId(), req.getCount());
    return ApiRestResponse.success(cartVOs);
  }

  @PostMapping("/update")
  public ApiRestResponse update(@RequestBody CartAddOrUpdateReq req) {
    List<CartVO> cartVOs = cartService.update(UserFilter.currentUser.getId(), req.getProductId(), req.getCount());
    return ApiRestResponse.success(cartVOs);
  }

  @PostMapping("/delete")
  public ApiRestResponse delete(@RequestBody CartDeleteReq req) {
    List<CartVO> cartVOs = cartService.delete(UserFilter.currentUser.getId(), req.getProductId());
    return ApiRestResponse.success(cartVOs);
  }
}
