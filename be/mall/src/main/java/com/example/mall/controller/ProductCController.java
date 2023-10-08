package com.example.mall.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.mall.common.ApiRestResponse;
import com.example.mall.model.pojo.Product;
import com.example.mall.model.request.ProductCListReq;
import com.example.mall.model.request.DetailOrDeleteReq;
import com.example.mall.service.ProductService;
import com.github.pagehelper.PageInfo;

@RestController
public class ProductCController {
  @Autowired
  ProductService productService;

  @PostMapping("/product/list")
  public ApiRestResponse getProductListByC(@Valid @RequestBody() ProductCListReq req) {
    PageInfo pageInfo = productService.listForC(req);
    return ApiRestResponse.success(pageInfo);
  }

  @PostMapping("/product/detail")
  public ApiRestResponse getProductDetailByC(@Valid @RequestBody() DetailOrDeleteReq req) {
    Product product = productService.detail(req.getId());
    return ApiRestResponse.success(product);
  }

}
