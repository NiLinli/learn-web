package com.nixixi.converter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.core.convert.converter.Converter;

// type conversion
// 当传递的参数和目标接受参数不相同时候, 进行转换
public class DateConverter implements Converter<String, Date> {

  private String pattern;

  public DateConverter(String pattern) {
    this.pattern = pattern;
  }

  @Override
  public Date convert(String arg0) {
    SimpleDateFormat simpleDateFormat = new SimpleDateFormat(this.pattern);

    Date date = null;
    try {
      date = simpleDateFormat.parse(arg0);
    } catch (ParseException e) {
      e.printStackTrace();
    }

    return date;
  }

}
