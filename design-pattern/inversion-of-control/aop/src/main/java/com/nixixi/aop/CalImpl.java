package com.nixixi.aop;

import org.springframework.stereotype.Component;

@Component
public class CalImpl implements Cal {
  @Override
  public int add(int x, int y) {
    int result = x + y;
    return result;
  }

  @Override
  public int sub(int x, int y) {
    int result = x - y;
    return result;
  }

}
