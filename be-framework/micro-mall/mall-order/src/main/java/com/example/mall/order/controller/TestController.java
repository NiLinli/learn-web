package com.example.mall.order.controller;

import org.redisson.api.RLock;
import org.redisson.api.RedissonClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mall.order.mq.OrderSender;

@RestController
@RequestMapping("/cart")
public class TestController {

  @Autowired
  RedissonClient redissonClient;

  @Autowired 
  OrderSender orderSender;

  @PostMapping("/test-lock")
  public String redissonLock() throws InterruptedException {

    RLock rLock = redissonClient.getLock("testLock");
    boolean b = rLock.tryLock();

    if (b) {
      try {

        Thread.sleep(5000);
      } finally {
        rLock.unlock();
      }

      return "处理完了";
    } else {
      return "🔒住在";
    }

  }

  @PostMapping("/test-mq")
  public void mq()  {
    orderSender.send();
  }

}
