package com.example.mall.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.mall.common.ApiRestResponse;

@ControllerAdvice
public class GlobalExceptionHandler {

  private final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

  @ExceptionHandler(Exception.class)
  @ResponseBody
  public Object handleException(Exception ex) {
    logger.error("Default Exception: ", ex);
    return ApiRestResponse.error(MallExceptionEnum.SYSTEM_ERROR);
  }

  @ExceptionHandler(MallException.class)
  @ResponseBody
  public Object handleMallException(MallException mallEx) {
    logger.error("Mall Exception: ", mallEx);
    return ApiRestResponse.error(mallEx.getCode(), mallEx.getMessage());
  }
}
