package com.example.mall.order.dao;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.example.mall.order.model.pojo.Order;
import com.example.mall.order.model.vo.OrderStatisticsVO;
import com.example.mall.order.model.vo.OrderVO;

public interface OrderMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Order record);

    int insertSelective(Order record);

    Order selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Order record);

    int updateByPrimaryKey(Order record);

    List<OrderVO> selectList();

    OrderVO selectByOrderNo(String orderNo);
    
    List<OrderStatisticsVO> selectOrderStatistics(@Param("startDate") Date startDate, @Param("endDate") Date endDate);
}