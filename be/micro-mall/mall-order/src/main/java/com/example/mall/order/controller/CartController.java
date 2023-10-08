package com.example.mall.order.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mall.common.common.ApiRestResponse;
import com.example.mall.order.model.request.CartAddOrUpdateReq;
import com.example.mall.order.model.request.CartDeleteReq;
import com.example.mall.order.model.vo.CartVO;
import com.example.mall.order.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {

  @Autowired
  CartService cartService;

  @PostMapping("/list")
  public ApiRestResponse list(HttpServletRequest request) {
    int userId = Integer.parseInt(request.getHeader("user-id"));
    List<CartVO> cartVOs = cartService.list(userId);
    return ApiRestResponse.success(cartVOs);
  }

  @PostMapping("/add")
  public ApiRestResponse add(@RequestBody CartAddOrUpdateReq req, HttpServletRequest request) {

    int userId = Integer.parseInt(request.getHeader("user-id"));
    List<CartVO> cartVOs = cartService.add(userId, req.getProductId(), req.getCount());
    return ApiRestResponse.success(cartVOs);
  }

  @PostMapping("/update")
  public ApiRestResponse update(@RequestBody CartAddOrUpdateReq req, HttpServletRequest request) {
    int userId = Integer.parseInt(request.getHeader("user-id"));
    List<CartVO> cartVOs = cartService.update(userId, req.getProductId(), req.getCount());
    return ApiRestResponse.success(cartVOs);
  }

  @PostMapping("/delete")
  public ApiRestResponse delete(@RequestBody CartDeleteReq req, HttpServletRequest request) {
    int userId = Integer.parseInt(request.getHeader("user-id"));
    List<CartVO> cartVOs = cartService.delete(userId, req.getProductId());
    return ApiRestResponse.success(cartVOs);
  }
}
