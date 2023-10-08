package com.example.mall.product.model.request;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductUpdateStockReq {

    @NotNull
    private Integer productId;

    @NotNull
    private Integer stock;

}