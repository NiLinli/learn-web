# redirects

3xx

重定向 URL 转发, 访问当前 URL, 返回转发目标 URL 的结果

1. 浏览器在接收到重定向响应的时候, 会采用该响应提供的新的 URL, 并立即进行加载
2. 大多数情况下, 除了会有一小部分性能损失之外, 重定向操作对于用户来说是不可见的

- 站点维护, 临时重定向
- 永久重定向

1. Client -> Server return 301(code) & Location(Response Header)
2. Client receive 301(code) & Location(Response Header)
3. Client -> Redirect Location

## 分类

### 永久

- 301 Moved Permanently 永久重定向 GET
- 308 Permanent Redirect 永久重定向, 非 GET 方法

### 临时

表示临时出现问题, 无法从标准地址访问

- 302 Found 由于不可预见的原因该页面暂不可用, 所以重定向到了一个可以访问的位置 GET
- 303 GET
- 307 Temporary Redirect, 同 302 非 GET

### 特殊

- 304 Not Modified, 重定向到本地的缓存

## 应用

1. http 重定向到 https
2. 一个站点, 多个域名
3. 迁移域名, callback 机制

## 安全

拒绝其他网站的重定向

## 坑

- 避免重定向死循环
- 客户端表现差异
  - 浏览器地址栏不一定会显示重定向后的域名
  - PostMan 无法显示重定向过程
