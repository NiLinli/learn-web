package com.example.mall.product.model.request;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductCListReq extends PaginationReq {
    private String keyword;
    private Integer categoryId;
    private Integer orderBy;
}