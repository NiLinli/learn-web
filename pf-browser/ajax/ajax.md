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

