package com.example.mall.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.mall.filter.UserFilter;

@Configuration
public class UserFilterConfig {
  
  @Bean
  public UserFilter userFilter() {
    return new UserFilter();
  }

  @Bean(name = "userFilterConf")
  public FilterRegistrationBean userFilterConfig() {
    FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean<>();

    filterRegistrationBean.setFilter(userFilter());
    filterRegistrationBean.addUrlPatterns("/category/*");
    filterRegistrationBean.addUrlPatterns("/cart/*");
    filterRegistrationBean.addUrlPatterns("/order/*");
    filterRegistrationBean.addUrlPatterns("/user/updateUserInfo");
    filterRegistrationBean.setName("userFilterConf");

    return filterRegistrationBean;
  }
}
