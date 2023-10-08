package com.example.mall.product.controller;


import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.mall.common.common.ApiRestResponse;
import com.example.mall.product.model.pojo.Product;
import com.example.mall.product.model.request.ProductAddReq;
import com.example.mall.product.model.request.ProductBatchSellStatusReq;
import com.example.mall.product.model.request.ProductUpdateReq;
import com.example.mall.product.model.request.DetailOrDeleteReq;
import com.example.mall.product.service.ProductService;
import com.github.pagehelper.PageInfo;

import com.example.mall.product.model.request.PaginationReq;

@RestController
@RequestMapping("admin/product")
// 新增很多参数校验方式
@Validated
public class ProductBController {

  @Autowired
  ProductService productService;

  @PostMapping("/add")
  public ApiRestResponse addProduct(@Valid @RequestBody() ProductAddReq req) {
    Product product = new Product();
    BeanUtils.copyProperties(req, product);
    productService.add(product);
    return ApiRestResponse.success();
  }

  @PostMapping("/addBatch")
  public ApiRestResponse addProductBatch(@Valid @RequestBody() List<ProductAddReq> req) {
    // 测试 List 参数校验
    return ApiRestResponse.success();
  }

  @PostMapping("/update")
  public ApiRestResponse updateProduct(@Valid @RequestBody() ProductUpdateReq req) {
    Product product = new Product();
    BeanUtils.copyProperties(req, product);
    productService.update(product);
    return ApiRestResponse.success();
  }

  @PostMapping("/delete")
  public ApiRestResponse deleteProduct(@Valid @RequestBody() DetailOrDeleteReq req) {
    // 一般是软删除, 改状态
    productService.remove(req.getId());
    return ApiRestResponse.success();
  }

  @PostMapping("/batchUpdateSellStatus")
  public ApiRestResponse batchUpdateSellStatusProduct(@Valid @RequestBody() ProductBatchSellStatusReq req) {
    productService.batchUpdateSellStatus(req.getIds(), req.getSellStatus());
    return ApiRestResponse.success();
  }

  @PostMapping("/list")
  public ApiRestResponse listProduct(@Valid @RequestBody() PaginationReq req) {
    PageInfo pageInfo = productService.listForAdmin(req.getPageNum(), req.getPageSize());
    return ApiRestResponse.success(pageInfo);
  }

}
