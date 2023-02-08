package com.example.mall.controller;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.mall.common.ApiRestResponse;
import com.example.mall.common.Constant;
import com.example.mall.exception.MallExceptionEnum;
import com.example.mall.model.pojo.User;
import com.example.mall.model.request.AddCategoryReq;
import com.example.mall.model.request.DeleteCategoryReq;
import com.example.mall.model.request.UpdateCategoryReq;
import com.example.mall.service.CategoryService;
import com.example.mall.service.UserService;

@Controller
public class CategoryController {

  @Autowired
  UserService userService;

  @Autowired
  CategoryService categoryService;

  @PostMapping("/category/add")
  @ResponseBody
  public ApiRestResponse addCategory(HttpSession session, @Valid @RequestBody AddCategoryReq req) {
    categoryService.add(req);
    return ApiRestResponse.success();
  }

  @PostMapping("/category/update")
  @ResponseBody
  public ApiRestResponse updateCategory(HttpSession session, @Valid @RequestBody UpdateCategoryReq req) {
    categoryService.update(req);
    return ApiRestResponse.success();
  }

  @PostMapping("/category/delete")
  @ResponseBody
  public ApiRestResponse deleteCategory(HttpSession session, @Valid @RequestBody DeleteCategoryReq req) {
    categoryService.remove(req.getId());
    return ApiRestResponse.success();
  }
}