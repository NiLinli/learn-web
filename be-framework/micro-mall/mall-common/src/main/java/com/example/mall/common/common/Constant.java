package com.example.mall.common.common;

public class Constant {
  public static final String SALT = "jkhsdkah98123knsaf/1h3kj";
  public static final String MALL_USER = "user";

  public static final String JWT_KEY = "mall_jwt";
  public static final String JWT_TOKEN_HEADER = "Authorization";
  public static final String USER_ID = "user_id";
  public static final String USER_NAME = "user_name";
  public static final String USER_ROLE = "user_role";
  public static final Long EXPIRE_TIME = 60 * 1000 * 60 * 24 * 1000L;// 单位是毫秒


  public interface SaleStatus {

    int NOT_SALE = 0;// 商品下架状态
    int SALE = 1;// 商品上架状态
  }

  public interface Cart {

    int UN_SELECTED = 0;// 购物车未选中状态
    int SELECTED = 1;// 购物车选中状态
  }
}
