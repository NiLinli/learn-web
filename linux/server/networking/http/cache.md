# 缓存 cache

[Cache-Control](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)

1. 客户端缓存(写入客户端)
2. 客户端缓存命中(客户端判断是否读取缓存)
3. 服务器端缓存验证(服务器端告知客户端是否应该读取缓存)

## 客户端缓存

### HTML 文档

**不推荐使用** `<meta http-equiv>` 标签控制缓存 HTML2.0 定义

1. 初衷: 无需更改 Web 服务器配置...
2. 只支持 html, 不支持其它静态文件
3. 前端缓存处理与正常的缓存处理冲突并产生混乱

### 响应头部

添加到响应头部, 浏览器成功响应后获取头部信息决定缓存策略。

Cache-Control: HTTP/1.1
Expires: 绝对时间, 客户端绝对时间并不准, 故不考虑
Pragma: 兼容 HTTP/1.0+, 一般不用考虑

1. Cache-Control: no-store  不存储缓存
2. Cache-Control: no-cache (Pragma: no-cache)  存储缓存, 但是必须要进行缓存验证后, 才能使用, 与 max-age=0 作用相同
3. Cache-Control: must-revalidate 必须进行缓存验证, **不可使用过期资源**(此种情形下, 服务器在验证过程中出错返回 504 Gateway Timeout)
4. Cache-Control: max-age  设置缓存的新鲜度
5. Expires: 绝对日期  与 max-age 作用相同

如果不响应上述头部, 不同客户端会有不同的**试探性过期**算法

1. 有 Last_modified, 过期时间设置为 (Date - Last_modified) * 20% , 一天或者一周
2. 连 Last_modified 都没有, 就由天了 0 1h 1day 都有

代理服务器 Cache-Control

- public 可以被代理服务器缓存(相对于客户端)
- privte 不能被代理服务器缓存
- s-maxage 代理服务器版本的 max-age
- proxy-revalidate 代理服务器版本的 must-revalidate

max-age=0 与 no-cache 对比

## 客户端读取缓存

1. 直接缓存命中, 不经过服务器 200 (from memory cache) 强缓存
2. 协商缓存(文档过期)

ps: 浏览器请求的时候有时候会在请求头中带 Cache-Control: no-cache 或者 Cache-Control: max-age: 0

## 服务器端缓存验证

满足条件:

1. 文档过期
2. 客户端上次缓存是否存了 Last-Modified 或者是 ETag

客户端请求头携带缓存验证器:

- If-Modified-Since
  1. 上次缓存响应头 Last-Modified 的值
  2. 对比的是 Date 所对应的字符串是否相同, 未比较时间大小, 可以理解为一个特定版本的 ETag
- If-None-Match
  1. 上次缓存响应头 ETag 的值
  2. 支持 Tag 对比强弱验证器

结果:

- 验证通过 304 + 头部(新鲜度信息相关的头部) 覆盖原有头部
- 验证未通过 200

### 验证起优先级

客户端设计

1. 返回 ETag, HTTP/1.1客户端就必须带 If-None-Match

服务器响应

如果两个都收到了, 必须同时满足才能返回 304
