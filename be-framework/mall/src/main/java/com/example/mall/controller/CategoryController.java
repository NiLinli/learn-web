package com.example.mall.controller;

import java.util.List;

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
import com.example.mall.model.pojo.Category;
import com.example.mall.model.pojo.User;
import com.example.mall.model.request.AddCategoryReq;
import com.example.mall.model.request.DeleteCategoryReq;
import com.example.mall.model.request.PaginationReq;
import com.example.mall.model.request.UpdateCategoryReq;
import com.example.mall.model.vo.CategoryVO;
import com.example.mall.service.UserService;
import com.example.mall.service.CategoryService;
import com.github.pagehelper.PageInfo;

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

  @PostMapping("/category/list")
  @ResponseBody
  public ApiRestResponse listCategoryForBackend(@Valid @RequestBody PaginationReq req) {

    PageInfo pageInfo = categoryService.list(req);
    return ApiRestResponse.success(pageInfo);
  }

  @PostMapping("/category/tree")
  @ResponseBody
  public ApiRestResponse treeCategoryForFe() {
    List<CategoryVO> categorieVos = categoryService.tree();
    return ApiRestResponse.success(categorieVos);
  }
}
