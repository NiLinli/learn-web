package com.example.mall.service;

import java.sql.Date;
import java.util.List;

import com.example.mall.model.request.OrderCreateReq;
import com.example.mall.model.vo.OrderStatisticsVO;
import com.example.mall.model.vo.OrderVO;

public interface OrderService {
  String create(OrderCreateReq req);

  List<OrderVO> list();

  OrderVO detail(String orderNo);

  List<OrderStatisticsVO> statistics(Date startDate, Date endDate);
}
