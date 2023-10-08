package com.example.mall.order.model.vo;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartVO {
  private Integer id;

  private Integer productId;

  private Integer quantity;

  private Integer selected;

  private Integer productPrice;

  private Integer productStatus;

  private String productName;

  private String productImage;
}
