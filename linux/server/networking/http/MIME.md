# MIME

Multipurpose Internet Mail Extensions 媒体类型

**浏览器**通常使用MIME类型（而不是文件扩展名）来确定如何处理URL

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

Content-Type 描述请求体(body) 或者响应体是什么类型的数据

### 请求头

#### 浏览器

- get 没有 body => 没有 Content-Type
- post
  - application/x-www-form-urlencoded => query 拼接的形式放入 Form Data(body)
  - multipart/form-data; boundary=----WebKitFormBoundary4dmHJZNAmF6dZZFU

#### xhr

自定义

- post
  - application/json 扩展
  - 也可以自行拼接 query

### 响应头


