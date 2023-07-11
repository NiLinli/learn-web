package com.example.mall.common.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.apache.tomcat.util.codec.binary.Base64;

import com.example.mall.common.common.Constant;

public class EncryptUtil {
  public static String getMD5String(String str) throws NoSuchAlgorithmException {
    MessageDigest md5 = MessageDigest.getInstance("MD5");
    return Base64.encodeBase64String(md5.digest((str + Constant.SALT).getBytes()));
  }
}
