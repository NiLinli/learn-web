package com.example.mall.common;

import com.example.mall.exception.MallExceptionEnum;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ApiRestResponse<T> {

  private Integer code;

  private String msg;

  private T data;

  private static final int OK_CODE = 0;

  private static final String OK_MSG = "SUCCESS";

  public ApiRestResponse(Integer code, String msg, T data) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }

  public ApiRestResponse(Integer code, String msg) {
    this.code = code;
    this.msg = msg;
  }

  public ApiRestResponse() {
    this(ApiRestResponse.OK_CODE, ApiRestResponse.OK_MSG);
  }

  public static <T> ApiRestResponse<T> success() {
    return new ApiRestResponse<T>();
  }

  public static <T> ApiRestResponse<T> success(T data) {
    ApiRestResponse<T> response = new ApiRestResponse<T>();
    response.data = data;
    return response;
  }

  public static <T> ApiRestResponse<T> error(Integer code, String msg) {
    return new ApiRestResponse<>(code, msg);
  }

  public static <T> ApiRestResponse<T> error(MallExceptionEnum ex) {
    return new ApiRestResponse<>(ex.getCode(), ex.getMsg());
  }

  @Override
  public String toString() {
    return "ApiRestResponse{" +
        "code=" + code +
        ", msg='" + msg + '\'' +
        ", data=" + data +
        '}';
  }

  public String toJSONString() throws JsonProcessingException {

    ObjectMapper mapper = new ObjectMapper();

    return mapper.writeValueAsString(this);
  }

  public Integer getCode() {
    return code;
  }

  public void setCode(Integer code) {
    this.code = code;
  }

  public String getMsg() {
    return msg;
  }

  public void setMsg(String msg) {
    this.msg = msg;
  }

  public T getData() {
    return data;
  }

  public void setData(T data) {
    this.data = data;
  }

  public static int getOkCode() {
    return OK_CODE;
  }

  public static String getOkMsg() {
    return OK_MSG;
  }
}