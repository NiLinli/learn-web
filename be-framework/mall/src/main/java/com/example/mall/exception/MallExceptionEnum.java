package com.example.mall.exception;

public enum MallExceptionEnum {

  NEED_USER_NAME(10001, "用户名不能为空"),
  NEED_PASSWORD(10002, "密码不能为空"),
  NAME_EXISTED(10003, "用户已存在"),
  USER_INSERT_FAILED(10004, "用户注册失败"),
  WRONG_PASSWORD(10005, "用户名或者密码错误"),
  NEED_LOGIN(10006, "用户未登陆"),
  UPDATE_USER_INFO_FAILED(10006, "用户信息更新失败"),
  NEED_ADMIN(10007, "没有管理权限"),
  SYSTEM_ERROR(20000, "系统异常");

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
