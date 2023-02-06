package com.example.mall.exception;

public enum MallExceptionEnum {

  NEED_USER_NAME(10001, "用户名不能为空"),
  NEED_PASSWORD(10002, "密码不能为空"),
  NAME_EXISTED(10003, "用户已存在"),
  USER_INSERT_FAILED(10004, "用户注册失败");

  Integer code;
  String msg;

  MallExceptionEnum(Integer code, String msg) {
    this.code = code;
    this.msg = msg;
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
}
