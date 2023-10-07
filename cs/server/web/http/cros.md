# Cross Origin

## 跨域中的域

`http://www.nilinli.com:80`

1. `http://` 协议
2. `www.nilinli.com` 域名
3. `80`  端口

三者必须完全相同, 同一 ip 的两个域名也不行

## 同源策略

Same-Origin Policy

- 浏览器需要保证每一个 origin 下面的数据都是独立的, 类似与 app 的沙箱
- 浏览器发送请求时候会自动带上 cookies
- 如果能跨域发送请求, 就相当于动了别人的数据

所以浏览器做了**一定的**限制, 限制之外的可以通过服务器判断请求是不是相同 origin

### 浏览器限制

发送请求, 并获取 http 相应数据

- xhr/fetch
- web 字体 @font-face
- WebGL 贴图

### 浏览器不限制

- link src
- script src
- img/video src
- iframe src
- form 提交

目的：访问外部资源
缺点： crsf & xss 攻击

- 发送请求，提交信息，形成 action
- xss 注入脚本获取 token 并且发送跨域请求收集信息
- 但是不能获取数据
  - link css 不能通过 js 去操作
  - script 执行任何信息都不能获取，包括 error
  - img/video 不能使用 getImageData 读取信息
  - ...

#### CORS settings attributes

crossrorigin 配置 CORS

1. 控制浏览器默认不限制的跨域请求，防止 crsf
2. 访问数据

- 未声明 no-cors + include
- 'anonymous' 不指定值也为该值 cors + same-origin(跨域请求不带 cookie)
- 'use-credentials' cors + include

## 解决跨域

### CORS

Cross Origin Resource Sharing

通过服务器端配置头文件, 开启跨域白名单: 服务器端告诉浏览器 http请求 在白名单中不存在安全性问题, 则允许跨域访问





#### 简单请求

- method
  - GET
  - HEAD
  - POST
- Content-Type
  - text/plain
  - multipart/form-data
  - application/x-www-form-urlencoded
- 其他条件

不满足上述条件的为非简单请求，跨域的访问的时候会发送 preflight 请求
常见 POST & Content-Type: application/json 就是非简单请求

#### 预检请求

1. 首先使用 OPTIONS 方法发起一个预检请求到服务器
    - OPTIONS 方法除了用于 CORS 以外, 还用于检查服务器支持的 methods
2. 服务器告知是否允许该实际请求
3. 允许发送实际请求，不允许就不发送实际请求
4. 发送实际请求的时候还是需要返回 CORS headers

作用：

1. 跨域请求只是客户端无法获取 response
2. 服务端接受了简单跨域请求有可能是会响应的
3. 添加 preflight 请求, 可以使得跨域请求先通过 preflight, 服务端再响应实际请求
4. 综上：避免跨域请求对服务器的用户数据产生未预期的影响，但是客户端又没有感知

#### CORS Http headers

##### 预检请求头

请求

- Access-Control-Request-Headers 告知服务器正式请求会使用的 
- Access-Control-Request-Method 告知服务器正式请求会使用的 methods

响应

- Access-Control-Allow-Methods: POST, GET, OPTIONS   实际请求可以允许的 methods
- Access-Control-Allow-Headers: X-PINGOTHER, Content-Type  实际请求可以允许的 headers 
- Access-Control-Max-Age: 86400   预检请求结果缓存时间(该值与浏览器默认值取小值)

##### 预检请求头 + 实际请求头

- Access-Control-Allow-Origin: http://foo.example

### jsonp

- 利用上面 script 不受限制发送跨域请求
- 然后通过服务器配置 hack 达到能够获取数据
- script 只能是 get 请求

### 反向代理

- 代理一层服务器, 通过 nginx 拿数据
- 导致接口域名发生改变, 就访问不到跨域的 cookies



