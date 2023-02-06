package com.example.mall.common;

import com.example.mall.exception.MallExceptionEnum;

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

  Integer getCode() {
    return code;
  }

  void setCode(Integer code) {
    this.code = code;
  }
}