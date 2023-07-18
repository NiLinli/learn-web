package com.example.mall.order.model.request;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderCreateReq {

  @NotNull
  private Integer[] productIds; // 商品

  @NotNull
  private String receiverName;  // 收货人

  @NotNull
  private String receiverMobile;  // 收货电话

  @NotNull
  private String receiverAddress; // 收货地址

}
