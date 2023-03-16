package com.nixixi.ioc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class GlobalConfig {
  @Value("8080")
  private String port;

  // 自动装配 从 ioc container 里面去找对应的 Bean DI
  @Autowired
  DataConfig dataConfig;
}
