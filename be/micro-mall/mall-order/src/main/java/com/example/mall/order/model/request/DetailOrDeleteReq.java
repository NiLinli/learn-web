package com.example.mall.order.model.request;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DetailOrDeleteReq {
  @NotNull
  private Integer id;
  
}