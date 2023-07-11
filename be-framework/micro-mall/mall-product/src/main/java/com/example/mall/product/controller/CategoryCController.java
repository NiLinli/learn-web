package com.example.mall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.mall.common.ApiRestResponse;
import com.example.mall.model.vo.CategoryVO;
import com.example.mall.service.UserService;
import com.example.mall.service.CategoryService;

@RestController
@RequestMapping("/category")
public class CategoryCController {

  @Autowired
  UserService userService;

  @Autowired
  CategoryService categoryService;

  @PostMapping("/tree")
  public ApiRestResponse treeCategoryForFe() {
    List<CategoryVO> categorieVos = categoryService.treeCategory(0);
    return ApiRestResponse.success(categorieVos);
  }
}
