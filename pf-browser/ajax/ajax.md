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

### 同源策略 Same-Origin Policy

- 浏览器需要保证每一个 origin 下面的数据都是独立的, 类似与 app 的沙箱
- 浏览器发送请求时候会自动带上 cookies
- 如果能跨域发送请求, 就相当于动了别人的数据

所以浏览器做了**一定的**限制, 限制之外的可以通过服务器判断请求是不是相同 origin

浏览器限制(发送请求, 并获取 http 相应数据):

- xhr/fetch
- web 字体 @font-face
- WebGL 贴图
- 使用 drawImage 将 Images/video 画面绘制到 canvas

浏览器不限制(发送请求, 但是不能获取数据): 访问外部资源, 但是遗留了 **crsf** 攻击

- script src
- img src
- iframe src
- form 提交

### Cors

cross origin resource sharing

通过服务器端配置头文件, 开启跨域白名单: 服务器端告诉浏览器 http请求 在白名单中不存在安全性问题, 则允许跨域访问

- ie10(完整)
- 移动端

- [Access_control_CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [How does Access-Control-Allow-Origin header work?](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work?r=SearchResults)

### jsonp

- 利用上面 script 不受限制发送跨域请求
- 然后通过服务器配置 hack 达到能够获取数据
- script 只能是 get 请求

### 反向代理

- 代理一层服务器, 通过 nginx 拿数据
- 导致接口域名发生改变, 就访问不到跨域的 cookies