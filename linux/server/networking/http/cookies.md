# cookies

HTTP/Web Cookie

1. 服务器发送到**浏览器**
2. 浏览器保存
3. 浏览器下次发送请求会携带

## Cookie 中的域

包括：域名 + 子域名(SameSite 属性的 Cookie 子域名不能访问)
不包括： 协议 + 端口号

## 作用

会话状态管理 HTTP 无状态

## 特点

`; ` 分隔符

- Set-Cookie 可以返回多个, 也可以使用单个加分隔符区分
- 定义 Cookie 属性需要添加到单个 Cookie 后面 `Set-Cookie: key=value; SameSite=Strict`

## 属性

- Domain Path 控制 Cookie 设置域, 默认为 origin 不包括子 path, 所以需要主动设置 Domain
- Expires/Max-Age 过期时间(参照客户端)  类似于缓存 Cache-Control
- SameSite 浏览器发送了跨域请求的情况下，设置该属性限制跨域请求不带该 Cookie => CRSF **不支持子域名**
- HttpOnly 只有请求可以发送，前端不能获取 => XSS
- 其他安全属性限制

## 现状

### 服务端

被淘汰，token 替代

1. 多平台公用一套 API 接口，非浏览器客户端对 Cookie 操作各不相同
2. 浏览器每次请求都会自动带 Cookie，带来额外的性能开销

### 客户端

Cookie 一般用于客户端自行存储数据
