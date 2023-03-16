package com.nixixi.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.nixixi.ioc.DataConfig;

@Configuration
public class BeanConfiguration {

  @Bean(name = "config")
  public DataConfig dataConfig() {
    DataConfig dataConfig = new DataConfig();
    dataConfig.setUsername("root");
    return dataConfig;
  }

}
