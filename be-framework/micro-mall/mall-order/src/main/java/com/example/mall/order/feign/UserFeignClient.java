package com.example.mall.order.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.mall.user.model.pojo.User;

@FeignClient(value = "mall-user")
public interface UserFeignClient {
  @PostMapping("/inner/user/getUserByUserId")
  public User getUserByUserId(@RequestBody int userId);
}
