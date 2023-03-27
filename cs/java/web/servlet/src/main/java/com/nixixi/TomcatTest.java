package com.nixixi;

import java.lang.reflect.Constructor;

public class TomcatTest {
  public static void main(String[] args) {
    // Tomcat 生成 Servlet 对象
    String path = "com.nixixi.HelloServlet";
    try {
      Class helloServlet = Class.forName(path);
      Constructor constructor = helloServlet.getConstructor();
      Object object = constructor.newInstance();
      System.out.println(constructor);
      System.out.println(object);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
