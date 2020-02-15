# ajax

## 浏览器表单

浏览器提交表单时候

- get: 会 encode query 参数 **浏览器会显示 decode 之后的url, 只是显示**
- post
  - Content-Type: application/x-www-form-urlencoded 和 get 一样处理参数
  - Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7OWA3DV1pkZATZs0 可以用来上传文件

总结：

- 浏览器原生表单只支持 get post
- post 只支持一种文本 Content-Type
- 浏览器会自动序列化 query / body

## 客户端 API

需要手动去处理文本格式 query / body 的 encode 或者 json 序列化

application/x-www-form-urlencoded 通过 URLSearchParams 处理参数

### get delete

### post put

客户端 API 支持多种文本格式, 除 multipart/form-data 以外都是文本格式

- application/x-www-form-urlencoded 和浏览器表单一致
- application/json                  自定义公认的 json 文本格式

**文本格式方式和 Content-Type 必须一致, 便于后台解析**

## xhr/axios/fetch

xhr

一般封装库检测到 response header 中 Content-Type: application/json 会自动 JSON.parse() 结果

## Cross Origin

### 跨域

http://www.nilinli.com:80

- http:// 协议
- www.nilinli.com 域名
- 80  端口

三者必须完全相同, 同一 ip 的两个域名也不行

### 浏览器限制

- xhr/fetch
- web 字体 @font-face
- WebGL 贴图
- 使用 drawImage 将 Images/video 画面绘制到 canvas

### 同源策略

Same-Origin Policy:

浏览器维持一个域的信息都独立再那个域里面, 而发送 http 请求会携带域里面的信息, 禁止跨域就是禁止 A 域访问 B 域名的信息(cookies)

1. A 登录, 浏览器存有 cookie
2. B 访问 A 的API, A http 请求携带有 cookie(B 访问 A 域下携带的信息), 这样可以做很多事情

浏览器(客户端)默认需要保持各域的信息是独立的, 类似于 app

### Cors

cross origin resource sharing

通过服务器端配置头文件, 开启跨域白名单: 服务器端告诉浏览器 http请求 在白名单中不存在安全性问题, 则允许跨域访问

- ie10(完整)
- 移动端

- [Access_control_CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [How does Access-Control-Allow-Origin header work?](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work?r=SearchResults)

### jsonp

通过服务器配置开放跨域

### 反向代理

- 代理一层服务器, 通过 nginx 拿数据
- 导致接口域名发生改变, 就访问不到跨域的 cookies