package com.demo.course;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
@EnableZuulProxy
public class CourseZuulApplication {

	public static void main(String[] args) {
		SpringApplication.run(CourseZuulApplication.class, args);
	}

}
