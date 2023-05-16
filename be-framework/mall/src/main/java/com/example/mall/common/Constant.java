package com.example.mall.common;

public class Constant {
  public static final String SALT = "jkhsdkah98123knsaf/1h3kj";
  public static final String MALL_USER = "user";


  public interface SaleStatus {

    int NOT_SALE = 0;// 商品下架状态
    int SALE = 1;// 商品上架状态
  }

  public interface Cart {

    int UN_SELECTED = 0;// 购物车未选中状态
    int SELECTED = 1;// 购物车选中状态
  }
}
