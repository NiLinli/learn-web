package com.nixixi.controller;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/convert")
public class ConvertController {

  @GetMapping("/string-date")
  public String getDate(Date date) {

    return date.toString();

  }

}
