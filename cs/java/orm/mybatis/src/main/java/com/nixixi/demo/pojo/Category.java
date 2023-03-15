package com.nixixi.demo.pojo;

import java.io.Serializable;

import java.util.Date;
import java.util.List;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Category implements Serializable {
  private Integer id;

  private String name;

  private Integer type;

  private Integer parentId;

  private Integer orderNum;

  private Date createTime;

  private Date updateTime;

  // 新增属性
  private int pId;

  private String pName;

  private Integer pPrice;

  // 新增 collection
  List<Product> products;
}
