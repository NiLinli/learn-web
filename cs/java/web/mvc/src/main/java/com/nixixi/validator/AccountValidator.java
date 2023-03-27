package com.nixixi.validator;

import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.nixixi.model.Account;

public class AccountValidator implements Validator {

  @Override
  public boolean supports(Class<?> arg0) {
    // 什么类会应用该 validator
    return Account.class.equals(arg0);
  }

  @Override
  public void validate(Object o, Errors e) {
    ValidationUtils.rejectIfEmpty(e, "name", "姓名不能为空");
    ValidationUtils.rejectIfEmpty(e, "password", "姓名不能为空");
  }

}
