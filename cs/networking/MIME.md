# MIME

Multipurpose Internet Mail Extensions 媒体类型  
默认 application/octet-stream

## 结构

type/subtype

MIME类型对**大小写不敏感**，但是传统写法都是小写

## 类型

数据本身是二进制的，但是客户端会根据 MIME 类型去解析
AJAX 也可以自行决定按照 文本/非文本解析

### 独立类型

- 文本 text/plain  text/...
- 图片 image/jpeg  image/...
- 音频 audio/mpeg  audio/...
- 视频 video/mp4   video/...
- 二进制 application/...

### 复合类型

- multipart/form-data 表单提交类型
- multipart/byteranges

## Content-Type

Content-Type 使用 MIME 描述请求体(body) 或者响应体是什么类型的数据

### 请求-客户端

适用: **存在 request body 的请求**  POST, PUT  
客户端有些默认行为会自动携带 MIME 类型, 有些客户端不会携带

#### 表单提交

客户端(一般只有浏览器)会携带相应的头

- application/x-www-form-urlencoded
- multipart/form-data 

#### XHR 自定义

文本

- application/json
- application/x-www-form-urlencoded
- multipart/form-data 

文件上传

- multipart/form-data (POST) 
- **大多数**客户端会自动计算 MIME (PUT) 

### 响应-服务端

**浏览器**通常使用MIME类型（而不是文件扩展名）来确定如何处理URL  
所以服务端必须设置正确的 MIME type, 根据后缀名区去设置

