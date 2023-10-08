package com.example.mall.product.model.request;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class CategoryUpdateReq {

  @NotNull
  private Integer id;

  @Size(min = 2, max = 10)
  private String name;

  private Integer type;

  private Integer parentId;

  private Integer orderNum;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

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
