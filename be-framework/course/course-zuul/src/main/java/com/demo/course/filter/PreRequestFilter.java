package com.demo.course.filter;

import org.springframework.cloud.netflix.zuul.filters.support.FilterConstants;
import org.springframework.stereotype.Component;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;

@Component
public class PreRequestFilter extends ZuulFilter {

  @Override
  public Object run() throws ZuulException {
    RequestContext currentContext = RequestContext.getCurrentContext();
    System.out.println("URI: " + currentContext.getRequest().getRequestURI());
    return null;
  }

  @Override
  public boolean shouldFilter() {
    return true;
  }

  @Override
  public int filterOrder() {
    return 5;
  }

  @Override
  public String filterType() {
    return FilterConstants.PRE_TYPE;
  }
  
}
