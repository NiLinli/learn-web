package com.example.mall.order.service;

import java.sql.Date;
import java.util.List;

import com.example.mall.order.model.request.OrderCreateReq;
import com.example.mall.order.model.vo.OrderStatisticsVO;
import com.example.mall.order.model.vo.OrderVO;

public interface OrderService {
  String create(OrderCreateReq req, Integer userId);

  List<OrderVO> list();

  OrderVO detail(String orderNo);

  List<OrderStatisticsVO> statistics(Date startDate, Date endDate);
}
