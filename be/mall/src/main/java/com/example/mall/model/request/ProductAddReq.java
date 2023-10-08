package com.example.mall.model.request;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductAddReq {

    @NotNull
    private String name;

    @NotNull
    private String image;

    private String detail;

    @NotNull
    private Integer categoryId;

    @NotNull
    @Min(1)
    private Integer price;

    @NotNull
    @Max(10000)
    private Integer stock;

    private Integer status;

}