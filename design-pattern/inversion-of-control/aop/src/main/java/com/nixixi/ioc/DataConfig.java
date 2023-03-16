package com.nixixi.ioc;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class DataConfig {
  private String url;
  private String driverName;

  @Value("root")
  private String username;
  private String password;
}
