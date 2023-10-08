package com.demo.course.service;
import java.util.List;
import com.demo.course.model.vo.CourseAndPrice;
import com.demo.course.service.CoursePriceService;

public interface CoursePriceService {

    public Integer getCoursePrice(String courseId);

    public List<CourseAndPrice> getCourseAndPrices();
}
