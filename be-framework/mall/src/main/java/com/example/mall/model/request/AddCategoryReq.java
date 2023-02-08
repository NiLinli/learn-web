package com.example.mall.model.request;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class AddCategoryReq {

  @Size(min = 2, max = 10)
  @NotNull
  private String name;

  @NotNull
  @Max(5)
  private Integer type;

  @NotNull
  private Integer parentId;

  @NotNull
  private Integer orderNum;

  public void setName(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public Integer getType() {
    return type;
  }

  public Integer getParentId() {
    return parentId;
  }

  public Integer getOrderNum() {
    return orderNum;
  }
}
