package com.example.mall.product.mp;

import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
@RabbitListener(queues = "queue1")
public class ProductReciever {

  @RabbitHandler
  public void process(String message) {
    System.out.println("收到消息" + message);
  }

}
