package com.example.mall.order.service.impl;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import com.example.mall.common.common.Constant.SaleStatus;
import com.example.mall.order.dao.CartMapper;
import com.example.mall.order.dao.OrderItemMapper;
import com.example.mall.order.dao.OrderMapper;
import com.example.mall.order.feign.ProductFeignClient;
import com.example.mall.common.exception.MallException;
import com.example.mall.common.exception.MallExceptionEnum;
import com.example.mall.order.model.pojo.Order;
import com.example.mall.order.model.pojo.OrderItem;
import com.example.mall.product.model.pojo.Product;
import com.example.mall.product.model.request.ProductUpdateStockReq;
import com.example.mall.order.model.request.OrderCreateReq;
import com.example.mall.order.model.vo.CartVO;
import com.example.mall.order.model.vo.OrderStatisticsVO;
import com.example.mall.order.model.vo.OrderVO;
import com.example.mall.order.service.CartService;
import com.example.mall.order.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {

  @Autowired
  CartService cartService;

  @Autowired
  CartMapper cartMapper;

  @Autowired
  OrderMapper orderMapper;

  @Autowired
  OrderItemMapper orderItemMapper;

  @Autowired
  ProductFeignClient productFeignClient;

  @Transactional(rollbackFor = Exception.class)
  @Override
  public String create(OrderCreateReq req, Integer userId) {

    Integer[] productIds = req.getProductIds();

    // 订单提交的商品为空
    if (productIds == null || productIds.length == 0) {
      throw new MallException(MallExceptionEnum.ORDER_PRODUCT_EMPTY);
    }

    // 购物车
    List<CartVO> cartVOs = cartService.listByProducts(userId, req.getProductIds());

    if (CollectionUtils.isEmpty(cartVOs)) {
      throw new MallException(MallExceptionEnum.ORDER_PRODUCT_EMPTY);
    }

    // 检查销售状态和库存
    validSaleStatusAndStock(cartVOs);

    // 订单 items
    List<OrderItem> orderItems = cartVoListToOrderList(cartVOs);

    // 扣库存
    decreaseStock(orderItems);

    // 删除购物车
    cleanCartProducts(cartVOs);

    // 生成订单 + 生成订单列表
    Order order = generateOrder(orderItems, userId, req);

    return order.getOrderNo();

  }

  @Override
  public List<OrderVO> list() {
    return orderMapper.selectList();
  }

  @Override
  public OrderVO detail(String orderNo) {
    return orderMapper.selectByOrderNo(orderNo);
  }

  private void validSaleStatusAndStock(List<CartVO> cartVOs) {
    for (CartVO cartVO : cartVOs) {
      Product product = productFeignClient.detailForFeign(cartVO.getProductId());

      if (product == null || product.getStatus().equals(SaleStatus.NOT_SALE)) {
        throw new MallException(MallExceptionEnum.PRODUCT_NOT_SALE);
      }

      if (cartVO.getQuantity() > product.getStock()) {
        throw new MallException(MallExceptionEnum.PRODUCT_NOT_ENOUGH);
      }
    }
  }

  private List<OrderItem> cartVoListToOrderList(List<CartVO> cartVOs) {

    List<OrderItem> orderItems = new ArrayList<>();
    for (CartVO cartVO : cartVOs) {
      OrderItem orderItem = new OrderItem();
      orderItem.setProductId(cartVO.getProductId());
      orderItem.setProductName(cartVO.getProductName());
      orderItem.setProductImg(cartVO.getProductImage());
      orderItem.setUnitPrice(cartVO.getProductPrice());
      orderItem.setQuantity(cartVO.getQuantity());
      orderItem.setTotalPrice(cartVO.getProductPrice() * cartVO.getQuantity());

      orderItems.add(orderItem);
    }

    return orderItems;
  }

  private void decreaseStock(List<OrderItem> orderItems) {
    for (OrderItem orderItem : orderItems) {
      Product product = productFeignClient.detailForFeign(orderItem.getProductId());
      int restStock = product.getStock() - orderItem.getQuantity();

      if (restStock < 0) {
        throw new MallException(MallExceptionEnum.PRODUCT_NOT_ENOUGH);
      }

      ProductUpdateStockReq req = new ProductUpdateStockReq();

      req.setProductId(product.getId());
      req.setStock(restStock);
      productFeignClient.updateStock(req);

    }
  }

  private void cleanCartProducts(List<CartVO> cartVOs) {
    for (CartVO cartVO : cartVOs) {
      cartMapper.deleteByPrimaryKey(cartVO.getId());
    }
  }

  private Order generateOrder(List<OrderItem> orderItems, Integer userId, OrderCreateReq req) {
    Order order = new Order();

    String orderNo = (new Random()).nextDouble() * (90000) + 10000 + "";
    order.setOrderNo(orderNo);
    order.setUserId(userId);
    order.setTotalPrice(getTotalPrice(orderItems));
    order.setReceiverName(req.getReceiverName());
    order.setReceiverMobile(req.getReceiverMobile());
    order.setReceiverAddress(req.getReceiverAddress());
    order.setOrderStatus(0);
    order.setPostage(0);
    order.setPaymentType(0);

    orderMapper.insertSelective(order);

    for (OrderItem orderItem : orderItems) {
      orderItem.setOrderNo(orderNo);
      orderItemMapper.insertSelective(orderItem);
    }

    return order;

  }

  private Integer getTotalPrice(List<OrderItem> orderItems) {
    Integer totalPrice = 0;
    for (OrderItem orderItem : orderItems) {
      totalPrice += orderItem.getTotalPrice();
    }
    return totalPrice;
  }

  @Override
  public List<OrderStatisticsVO> statistics(Date startDate, Date endDate) {
    List<OrderStatisticsVO> orderStatisticsVOs = orderMapper.selectOrderStatistics(startDate, endDate);
    return orderStatisticsVOs;
  }

}
