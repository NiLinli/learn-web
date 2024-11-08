package com.example.mall.exception;

public enum MallExceptionEnum {

  NEED_USER_NAME(10001, "用户名不能为空"),
  NEED_PASSWORD(10002, "密码不能为空"),
  NAME_EXISTED(10003, "用户已存在"),
  USER_INSERT_FAILED(10004, "用户注册失败"),
  WRONG_PASSWORD(10005, "用户名或者密码错误"),
  NEED_LOGIN(10006, "用户未登陆"),
  TOKEN_EXPIRED(10016, "用户token过期"),
  TOKEN_ERROR(10026, "用户token不正确"),
  UPDATE_USER_INFO_FAILED(10007, "用户信息更新失败"),
  NEED_ADMIN(10008, "没有管理权限"),
  CATEGORY_DUPLICATE(11001, "分类名相同"),
  CATEGORY_ADD_FAILED(11002, "分类新增失败"),
  CATEGORY_UPDATE_FAILED(11003, "分类更新失败"),
  CATEGORY_REMOVE_FAILED(11004, "分类删除失败"),
  PRODUCT_NAME_EXISTED(12001, "产品名字相同"),
  PRODUCT_ADD_FAILED(12002, "创建产品失败"),
  PRODUCT_UPDATE_FAILED(12003, "更新产品失败"),
  PRODUCT_DELETE_FAILED(12004, "删除产品失败"),
  PRODUCT_NOT_SALE(13001, "商品无法购买"),
  PRODUCT_NOT_ENOUGH(13002, "商品库存不足"),
  CART_ADD_FAILED(13003, "商品添加失败"),
  CART_UPDATE_FAILED(13004, "商品更新失败"),
  CART_DELETE_FAILED(13005, "商品删除失败"),
  ORDER_PRODUCT_EMPTY(14001, "订单没有商品"),
  SYSTEM_ERROR(20000, "系统异常"),
  PARAMS_ERROR(20001, "请求参数错误")
  ;

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
