package com.example.mall.model.request;

import javax.validation.constraints.NotNull;

public class PaginationReq {
  @NotNull
  private Integer pageNum;

  @NotNull
  private Integer pageSize;

  public Integer getPageNum() {
    return pageNum;
  }

  public Integer getPageSize() {
    return pageSize;
  }
}
