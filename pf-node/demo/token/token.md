# token

用户信息, 授权过程都放入 token 中, 特点:

1. token 无法更改(Signature 部分校验), 所以无法更改其失效时间
2. 在失效时间之前无法使 token 失效, 只能前端丢弃

访问资源的凭据, 为 OAuth 和 JWT 服务

## 携带方式

- url query params
- http header
- ...

## token 类型

- access token: 负责请求资源
- refresh token: 负责身份认证

## sso

single sign on 单点登录

Authentication: 认证, 用于鉴别访问者是否为合法用户
Authorisation: 授权, 决定你有访问那些资源的权限

SP: 服务提供商, 也就是自己开发的业务网站 service provider/resource server
IdP: 认证服务, identify provider

### SAML

SP 是动态网页(前后端不分离)的形式, 没有严格意义上的 client(spa)

Idp 验证后,

- Http Redirect: 不适合, SMAL Token (xml 信息) 长度 url 可能无法携带
- Http post: post 去提交一个表单给 SP, 动态页面跳转回去

http post 这种方式不适合 spa , app ....

### OAuth 2.0

SP + Client + Idp

1. Client 访问 SP, 被告知要授权, 将用户重定向到 Idp
2. Client 拿 code 向 Idp 获取 access token
3. Client 拿 access code 访问 SP
4. SP 向 Idp 验证 access code 并返回数据给 Client

授权(本意) + 认证

code 很短, 可以通过 http redirect 方式

### OpenId

和 OAuth2.0 很像, 不带授权的版本  
以一个账号(eg: Facebook 账号)登录很多地方, 仅仅是为你的合法身份背书, 但是并没有权限拿到该账号的数据  

## JWT

JSON web token, JSON 结构的 token, 三个部分组成:

1. header
2. payload
3. signature

header: 描述元信息

```json
{
  "typ": "JWT",
  "alg": "HS256"
}
```

payload: 你希望向服务端传递的信息

```json
{

}
```

## 前端 token 处理

请求同时有 n 个

1. 不考虑刷新 token: 跳转到登录页面, cancel 其他相应
2. 考虑刷新 token: 