package com.example.mall.model.request;

import javax.validation.constraints.NotNull;

public class DeleteCategoryReq {

  @NotNull
  private Integer id;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

}
