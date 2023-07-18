package com.example.mall.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.mall.common.common.ApiRestResponse;
import com.example.mall.product.model.vo.CategoryVO;
import com.example.mall.product.service.CategoryService;

@RestController
@RequestMapping("/category")
public class CategoryCController {

  @Autowired
  CategoryService categoryService;

  @PostMapping("/tree")
  public ApiRestResponse treeCategoryForFe() {
    List<CategoryVO> categorieVos = categoryService.treeCategory(0);
    return ApiRestResponse.success(categorieVos);
  }
}
