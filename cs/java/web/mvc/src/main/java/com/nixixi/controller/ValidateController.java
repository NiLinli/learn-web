package com.nixixi.controller;

import javax.validation.Valid;

import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nixixi.model.Account;
import com.nixixi.model.Person;

@RestController
@RequestMapping("/validator")
public class ValidateController {
  @GetMapping("/account")
  public String account(@Validated Account account, BindingResult bindingResult) {

    if (bindingResult.hasErrors()) {
      return bindingResult.toString();
    }

    return "success";
  }

  @PostMapping("/person")
  public String person(@Valid @RequestBody Person person, BindingResult bindingResult) {

    if (bindingResult.hasErrors()) {
      return bindingResult.toString();
    }

    return "success";
  }
}
