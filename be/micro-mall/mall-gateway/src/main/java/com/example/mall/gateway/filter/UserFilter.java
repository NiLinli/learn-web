package com.example.mall.gateway.filter;

import java.io.IOException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Lazy;
import org.springframework.core.Ordered;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.server.ServerWebExchange;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.mall.common.common.Constant;
import com.example.mall.common.exception.MallException;
import com.example.mall.common.exception.MallExceptionEnum;
import reactor.core.publisher.Mono;

@Component
public class UserFilter implements GlobalFilter, Ordered {


  @Override
  public int getOrder() {
    return -100;
  }

  @Override
  public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {

    ServerHttpRequest request = exchange.getRequest();
    // ServerHttpResponse response = exchange.getResponse();
    String uri = request.getURI().getPath();

    if (checkWhiteList(uri)) {
      return chain.filter(exchange);
    }

    String token = request.getHeaders().getFirst(Constant.JWT_TOKEN_HEADER);
    


    if (!StringUtils.hasText(token)) {
      throw new MallException(MallExceptionEnum.NEED_LOGIN);
    }

    Algorithm algorithm = Algorithm.HMAC256(Constant.JWT_KEY);
    JWTVerifier verifier = JWT.require(algorithm).build();

    int userId;
    try {
      DecodedJWT jwt = verifier.verify(token);
      userId = jwt.getClaim(Constant.USER_ID).asInt();
    } catch (TokenExpiredException e) {
      throw new MallException(MallExceptionEnum.TOKEN_EXPIRED);
    } catch (JWTDecodeException e) {
      throw new MallException(MallExceptionEnum.TOKEN_ERROR);
    }

    ServerHttpRequest host = exchange.getRequest().mutate().header("user-id", userId + "").build();
    ServerWebExchange build = exchange.mutate().request(host).build();

    return chain.filter(build);
  }

  private boolean checkWhiteList(String uri) {
    if (uri.contains("/login") || uri.contains("register")) {
      return true;
    }

    return false;

  }

}
