package com.example.mall.model.request;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductUpdateReq extends ProductAddReq {

    @NotNull
    private Integer id;

}