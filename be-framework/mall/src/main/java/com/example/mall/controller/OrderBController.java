package com.example.mall.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mall.common.ApiRestResponse;
import com.example.mall.model.request.OrderOperateReq;
import com.example.mall.model.request.PaginationReq;

@RestController
@RequestMapping("admin/order")
public class OrderBController {

  @PostMapping("list")
  public ApiRestResponse list(@RequestBody PaginationReq req) {
    return ApiRestResponse.success();
  }

  @PostMapping("delivered")
  public ApiRestResponse delivered(@RequestBody OrderOperateReq req) {
    return ApiRestResponse.success();
  }

  @PostMapping("finish")
  public ApiRestResponse finish(@RequestBody OrderOperateReq req) {
    return ApiRestResponse.success();
  }
}
