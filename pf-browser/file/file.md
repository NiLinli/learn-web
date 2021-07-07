# file

除去特殊的文本二进制文件，其他二进制文件这里都统称为文件

## 描述对象

### Blob

Binary Large Object

基础功能 IE10+

构造函数

`new Blob(array, options)`

- array: ArrayBuffer, ArrayBufferView, Blob, DOMString(utf-8 编码放入)
- options
  - type: MIME
  - endings: \n 如何处理

实例  

- size  byte 单位
- type  MIME 类型

- slice 截取返回新的 blob
- text/arrayBuffer/stream 转化类型处理

转化为 base64

#### 实用场景

- blob slice 分片上传
- blob url + a 标签下载

#### File

### ArrayBuffer

### Stream/ReadStream

- ie 不支持
- fetch 返回 ReadStream

## 操作工具

### FileReader

ie10+

`const reader = new FileReader();`

实例

参数都为 blob

- readAsDataURL() 读取成 base64
- readAsText()    读取成 text
- readAsArrayBuffer() 读取成 ArrayBuffer

### URL.createObjectURL

- 申请 `const objectURL = URL.createObjectURL(object)`
- 释放 `URL.revokeObjectURL(objectURL)`

参数

object Blob/File/MediaSource(video/audio)

返回

生成 blob://  file:// 等伪协议, 用来 html 显示, 下载
