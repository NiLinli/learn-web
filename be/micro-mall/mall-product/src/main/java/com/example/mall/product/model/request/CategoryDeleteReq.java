package com.example.mall.product.model.request;

import javax.validation.constraints.NotNull;

public class CategoryDeleteReq {

  @NotNull
  private Integer id;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

}
