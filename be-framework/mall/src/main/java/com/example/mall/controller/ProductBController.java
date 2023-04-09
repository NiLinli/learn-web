package com.example.mall.controller;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.mall.common.ApiRestResponse;
import com.example.mall.model.request.AddProductReq;

@Controller
public class ProductBController {

  @PostMapping("/product/add")
  public ApiRestResponse addProduct(@Valid @RequestBody() AddProductReq req) {

    return ApiRestResponse.success();
  }
  
}
