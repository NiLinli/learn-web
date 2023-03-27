package com.nixixi;

import com.google.gson.Gson;
import com.nixixi.model.Address;
import com.nixixi.model.User;

public class JsonTest {
  public static void main(String[] args) {
    Gson gson = new Gson();

    User user = new User();
    Address address = new Address();
    user.setName("nixixi");
    address.setCity("wuhan");
    user.setAddress(address);

    // stringify
    String jsonString = gson.toJson(user);
    System.out.println(jsonString);

    // parse
    User user2 = gson.fromJson(jsonString, User.class);
    System.out.println(user2.getAddress().getCity());
  }
}
