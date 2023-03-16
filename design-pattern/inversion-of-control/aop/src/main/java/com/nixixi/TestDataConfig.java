package com.nixixi;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.nixixi.configuration.BeanConfiguration;
import com.nixixi.ioc.DataConfig;
import com.nixixi.ioc.GlobalConfig;

public class TestDataConfig {
    public static void main(String[] args) {
        // Ioc container
        // ApplicationContext context = new
        // AnnotationConfigApplicationContext(BeanConfiguration.class);
        // System.out.println(context.getBean("config"));

        ApplicationContext context = new AnnotationConfigApplicationContext("com.nixixi.ioc");
        System.out.println(context.getBean(DataConfig.class));
        System.out.println(context.getBean(GlobalConfig.class));
    }
}
