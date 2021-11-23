# proxy_pass

反向代理

HttpProxy 模块

## 配置项

1. 后端返回缓存区配置 Buffer
2. 代理请求操作
    - 隐藏 header
    - 超时
    - ...
3. proxy_pass
4. proxy_redirect

### proxy_pass

```nginx

location /api/ {
  # 不带 path, 会保留 location 中的 path 部分
  proxy_pass http://localhost:8080
}

location /api2/ {
  # 带 path, 不会保留 location 重的 path 部分
  proxy_pass http://localhost:8080/
}
```

http://localhost:80/api/haha  => http://localhost:8080/api/haha  
http://localhost:80/api2/haha  => http://localhost:8080/haha