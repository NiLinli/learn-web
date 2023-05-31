package com.example.mall.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.validation.Valid;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.mall.common.ApiRestResponse;
import com.example.mall.model.pojo.Product;
import com.example.mall.model.request.ProductAddReq;
import com.example.mall.model.request.ProductBatchSellStatusReq;
import com.example.mall.model.request.CategoryUpdateReq;
import com.example.mall.model.request.DetailOrDeleteReq;
import com.example.mall.service.ProductService;
import com.github.pagehelper.PageInfo;

import net.coobird.thumbnailator.Thumbnails;

import com.example.mall.model.request.PaginationReq;

@RestController
@RequestMapping("admin/product")
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

  @PostMapping("/update")
  public ApiRestResponse updateProduct(@Valid @RequestBody() CategoryUpdateReq req) {
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

  @PostMapping("/uploadExcel")
  public ApiRestResponse uploadExcel(@RequestParam("file") MultipartFile multipartFile) throws IOException {

    // MultipartFile to TempFile
    String fileName = multipartFile.getOriginalFilename();
    String suffix = fileName.substring(fileName.lastIndexOf("."));
    File tempFile = File.createTempFile("product-upload-excel", suffix);
    multipartFile.transferTo(tempFile);

    System.out.println(tempFile.getAbsolutePath());
    productService.addProductByExcel(tempFile);
    return ApiRestResponse.success();
  }

  @PostMapping(value = "/handleImg", produces = MediaType.IMAGE_PNG_VALUE)
  public byte[] handleImg(@RequestParam("file") MultipartFile multipartFile) throws IOException {

    // MultipartFile to TempFile
    String fileName = multipartFile.getOriginalFilename();
    String suffix = fileName.substring(fileName.lastIndexOf("."));
    File tempFile = File.createTempFile("product-handle-img-receiver", suffix);
    multipartFile.transferTo(tempFile);

    File outTempFile = File.createTempFile("product-handle-img-return", suffix);

    Thumbnails.of(tempFile).scale(1).rotate(90).toFile(outTempFile);
    InputStream inputStream = new FileInputStream(outTempFile);

    return IOUtils.toByteArray(inputStream);
  }

}
