package com.example.mall.exception;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.properties.bind.BindResult;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
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

  @ExceptionHandler(MethodArgumentNotValidException.class)
  @ResponseBody
  public Object handleReqValidationException(MethodArgumentNotValidException validationEx) {
    logger.error("MethodArgumentNotValidException Exception: ", validationEx);

    List<String> list = new ArrayList<String>();

    BindingResult result = validationEx.getBindingResult();
    if (result.hasErrors()) {
      List<ObjectError> allErrors = result.getAllErrors();

      for (ObjectError error : allErrors) {
        list.add(error.getDefaultMessage());
      }
    }

    if (list.isEmpty()) {
      return ApiRestResponse.error(MallExceptionEnum.PARAMS_ERROR);
    } else {
      return ApiRestResponse.error(MallExceptionEnum.PARAMS_ERROR.getCode(), list.get(0)); 
    }
  }

  // 增加对 @Validated 参数校验的异常
}
