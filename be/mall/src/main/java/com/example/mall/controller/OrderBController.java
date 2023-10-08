package com.example.mall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mall.common.ApiRestResponse;
import com.example.mall.model.request.OrderOperateReq;
import com.example.mall.model.request.OrderStatisticsReq;
import com.example.mall.model.request.PaginationReq;
import com.example.mall.model.vo.OrderStatisticsVO;
import com.example.mall.service.OrderService;

@RestController
@RequestMapping("admin/order")
public class OrderBController {

  @Autowired
  OrderService orderService;

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

  @PostMapping("statistics")
  public ApiRestResponse statistics(@RequestBody OrderStatisticsReq req) {
    List<OrderStatisticsVO> orderStatisticsVOs = orderService.statistics(req.getStartDate(), req.getEndDate());
    return ApiRestResponse.success(orderStatisticsVOs);
  }
}
