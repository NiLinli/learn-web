package com.example.mall.user;

import java.util.concurrent.TimeUnit;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication(scanBasePackages = { "com.example.mall" })
@EnableDiscoveryClient
@MapperScan(basePackages = "com.example.mall.user.dao")
public class UserApplication {

	public static void main(String[] args) throws InterruptedException {
		ConfigurableApplicationContext applicationContext = SpringApplication.run(UserApplication.class, args);
		while (true) {
			// 当动态配置刷新时，会更新到 Environment 中，因此这里每隔一秒中从 Environment 中获取配置
			// 刷新了还应该对响应的组件配置进行更新
			String dataSourceUrl = applicationContext.getEnvironment().getProperty("spring.datasource.url");

			System.err.println("dataSourceUrl :" + dataSourceUrl);
			TimeUnit.SECONDS.sleep(1);
		}

	}

}
