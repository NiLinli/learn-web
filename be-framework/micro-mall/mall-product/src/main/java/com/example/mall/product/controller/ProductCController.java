package com.example.mall.product.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.mall.common.common.ApiRestResponse;
import com.example.mall.product.model.pojo.Product;
import com.example.mall.product.model.request.ProductCListReq;
import com.example.mall.product.model.request.ProductUpdateStockReq;
import com.example.mall.product.model.request.DetailOrDeleteReq;
import com.example.mall.product.service.ProductService;
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


  @PostMapping("/inner/product/detailForFeign")
  public Product detailForFeign(@RequestBody Integer id) {
    Product product = productService.detail(id);
    return product;
  }

  @PostMapping("/inner/product/updateStock")
  public void updateStock(@RequestBody ProductUpdateStockReq req) {
    productService.updateStock(req.getProductId(), req.getStock());
  }

}
