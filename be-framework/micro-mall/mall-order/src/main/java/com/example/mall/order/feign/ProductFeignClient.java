package com.example.mall.order.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.mall.product.model.pojo.Product;
import com.example.mall.product.model.request.ProductUpdateStockReq;

@FeignClient(value = "mall-product")
public interface ProductFeignClient {
  
  @PostMapping("/inner/product/detailForFeign")
  Product detailForFeign(@RequestBody Integer id);

  @PostMapping("/inner/product/updateStock")
  public void updateStock(@RequestBody ProductUpdateStockReq req);

}
