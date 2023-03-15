package com.nixixi.demo.pojo;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product implements Serializable {
    private Integer id;

    private String name;

    private String image;

    private String detail;

    private Integer categoryId;

    private Integer price;

    private Integer stock;

    private Integer status;

    private Date createTime;

    private Date updateTime;

    // 新增一个属性
    private String categoryName;

    // association 关联一个对象
    private Category category;
}