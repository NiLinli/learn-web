package com.nixixi.aop;

import java.util.Arrays;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LogAspect {
  @Before("execution(public int com.nixixi.aop.CalImpl.*(..))")
  public void before(JoinPoint joinPoint) {
    String name = joinPoint.getSignature().getName();
    System.out.println(name + " method args is " + Arrays.toString(joinPoint.getArgs()));
  }

  @AfterReturning(value = "execution(public int com.nixixi.aop.CalImpl.*(..))", returning = "result")
  public void afterRunning(JoinPoint joinPoint, Object result) {
    String name = joinPoint.getSignature().getName();
    System.out.println(name + " method result is " + result);
  }

}
