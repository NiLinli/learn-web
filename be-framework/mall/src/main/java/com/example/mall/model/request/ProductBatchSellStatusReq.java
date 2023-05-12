package com.example.mall.model.request;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductBatchSellStatusReq {

    @NotNull
    private Integer[] ids;

    @NotNull
    private Integer sellStatus;
}