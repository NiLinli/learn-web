# session 相关

## cookies

1. 服务器服务器端返回数据时候,给客户端一些数据 cookies  Set-Cookie 头部带回
2. 客户端下次访问的时候会自动带过去 (cookies 数据不同域名之间, 不能相互访问) Cookie 请求头部带去

常见应用场景

- 贴一些特性信息, 便于推送广告
- 登录后, 往响应里面贴 session_id (用户信息), 服务器收取 session_id 后, 去数据库中查用户数据

cookies 优点:

- 不需要客户端支持

缺点:

- 跨域导致的 crsf 攻击等

## session

会话 = http 无状态 + session 保持状态
原理(是验证后的 http 达到有状态的效果)

1. 服务器端想办法把 session id 返回给客户端
2. 客户端下次访问时候携带 session id
3. 服务器端根据 session id 查询用户信息

实现方式

1. cookies
2. redirect url

弊端

1. 集群需要同步
2. 服务器端需要存储太多的 session id

应用

动态网页(进入页面需要在后台验证登录状态) + 单页面

## token

和 session 区别是信息存储在客户端还是服务器端

1. 服务器端返回 token 而不是 session id, token 直接加密存储信息(把信息存储到了客户端)
2. ...
3. 服务器端解密 token 获取信息

优点: 解决 session 弊端, 实现无状态验证用户信息