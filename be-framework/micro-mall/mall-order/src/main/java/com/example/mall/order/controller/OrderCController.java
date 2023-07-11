package com.example.mall.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mall.common.ApiRestResponse;
import com.example.mall.model.request.OrderCreateReq;
import com.example.mall.model.request.OrderOperateReq;
import com.example.mall.model.request.PaginationReq;
import com.example.mall.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderCController {
  @Autowired
  OrderService orderService;

  @PostMapping("/add")
  public ApiRestResponse add(@RequestBody OrderCreateReq req) {
    return ApiRestResponse.success(orderService.create(req));
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
