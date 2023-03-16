package com.nixixi;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.nixixi.aop.Cal;

public class TestAop {
  public static void main(String[] args) {

    ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");

    Cal bean = context.getBean(Cal.class);
    bean.add(1, 2);
    bean.sub(2, 3);
  }
}
