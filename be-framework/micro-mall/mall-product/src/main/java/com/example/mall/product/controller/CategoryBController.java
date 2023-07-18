package com.example.mall.product.controller;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.mall.common.common.ApiRestResponse;
import com.example.mall.product.model.request.CategoryAddReq;
import com.example.mall.product.model.request.CategoryDeleteReq;
import com.example.mall.product.model.request.PaginationReq;
import com.example.mall.product.model.request.CategoryUpdateReq;
import com.example.mall.product.model.vo.CategoryVO;
import com.example.mall.product.service.CategoryService;
import com.github.pagehelper.PageInfo;

@RestController
@RequestMapping("admin/category")

public class CategoryBController {



  @Autowired
  CategoryService categoryService;

  @PostMapping("/add")
  public ApiRestResponse addCategory(@Valid @RequestBody CategoryAddReq req) {
    categoryService.add(req);
    return ApiRestResponse.success();
  }

  @PostMapping("/update")
  public ApiRestResponse updateCategory(@Valid @RequestBody CategoryUpdateReq req) {
    categoryService.update(req);
    return ApiRestResponse.success();
  }

  @PostMapping("/delete")
  public ApiRestResponse deleteCategory(@Valid @RequestBody CategoryDeleteReq req) {
    categoryService.remove(req.getId());
    return ApiRestResponse.success();
  }

  @PostMapping("/list")
  public ApiRestResponse listCategoryForBackend(@Valid @RequestBody PaginationReq req) {

    PageInfo pageInfo = categoryService.list(req);
    return ApiRestResponse.success(pageInfo);
  }

}
