package com.example.mall.order.mq;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrderSender {

  @Autowired
  AmqpTemplate amqpTemplate;

  public void send() {
    this.amqpTemplate.convertAndSend("bootExchange", "productStock", "更新库存");
  }

}
