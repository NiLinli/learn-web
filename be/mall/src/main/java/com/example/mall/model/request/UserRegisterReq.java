package com.example.mall.model.request;

public class UserRegisterReq  {

  private String userName;
  private String password;

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public String getUserName() {
    return userName;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getPassword() {
    return password;
  }
}
