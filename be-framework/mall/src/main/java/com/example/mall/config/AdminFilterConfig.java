package com.example.mall.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.mall.filter.AdminFilter;

@Configuration
public class AdminFilterConfig {
  
  @Bean
  public AdminFilter adminFilter() {
    return new AdminFilter();
  }

  @Bean(name = "adminFilterConf")
  public FilterRegistrationBean adminFilterConfig() {
    FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean<>();

    filterRegistrationBean.setFilter(adminFilter());
    filterRegistrationBean.addUrlPatterns("/admin/category/*");
    filterRegistrationBean.addUrlPatterns("/admin/product/*");
    filterRegistrationBean.addUrlPatterns("/admin/order/*");
    filterRegistrationBean.setName("adminFilterConf");

    return filterRegistrationBean;
  }
}
