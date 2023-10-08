package com.example.mall.product.model.query;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductCListQuery {
  private String keyword;
  private List<Integer> categoryIds;
}