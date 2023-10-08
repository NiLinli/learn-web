package com.example.mall.order.config;

import org.redisson.api.RLock;
import org.redisson.api.RedissonClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.example.mall.order.service.OrderService;

@Component
public class JobConfig {

  @Autowired
  OrderService orderService;

  @Autowired
  RedissonClient redissonClient;

  @Scheduled(cron = "0 0/5 * * * ?")
  public void cancelUnpaidOrders() throws InterruptedException {
    RLock rLock = redissonClient.getLock("cancelUnpaidOrders");
    boolean b = rLock.tryLock();

    if (b) {
      try {
        System.out.println("定时任务被本 Order Service 执行");
        Thread.sleep(2000);
      } finally {
        rLock.unlock();
      }

    } else {
      System.out.println("定时任务被其他 Order Service 执行");
    }
  }

}
