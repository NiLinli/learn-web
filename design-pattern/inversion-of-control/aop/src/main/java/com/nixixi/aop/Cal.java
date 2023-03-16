package com.nixixi.aop;

import org.springframework.stereotype.Component;

@Component
public interface Cal {
  int add(int x, int y);

  int sub(int x, int y);
}
