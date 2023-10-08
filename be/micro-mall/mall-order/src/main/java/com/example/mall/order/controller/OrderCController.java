package com.example.mall.order.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mall.common.common.ApiRestResponse;
import com.example.mall.order.model.request.OrderCreateReq;
import com.example.mall.order.model.request.OrderOperateReq;
import com.example.mall.order.model.request.PaginationReq;
import com.example.mall.order.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderCController {
  @Autowired
  OrderService orderService;

  @PostMapping("/add")
  public ApiRestResponse add(@RequestBody OrderCreateReq req, HttpServletRequest request) {
    int userId = Integer.parseInt(request.getHeader("user-id"));
    return ApiRestResponse.success(orderService.create(req, userId));
  }

  @PostMapping("/detail")
  public ApiRestResponse detail(@RequestBody OrderOperateReq req) {
    return ApiRestResponse.success(orderService.detail(req.getOrderNo()));
  }

  @PostMapping("list")
  public ApiRestResponse list(@RequestBody PaginationReq req) {
    return ApiRestResponse.success(orderService.list());
  }

  @PostMapping("cancel")
  public ApiRestResponse cancel(@RequestBody OrderCreateReq req) {
    return ApiRestResponse.success();
  }

  @PostMapping("pay")
  public ApiRestResponse pay(@RequestBody OrderCreateReq req) {
    return ApiRestResponse.success();
  }

  @PostMapping("pay-result")
  public ApiRestResponse payResult(@RequestBody OrderCreateReq req) {
    return ApiRestResponse.success();
  }

}
