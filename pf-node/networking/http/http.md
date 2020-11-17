# http

http.createServer 返回一个 Sever 对象

## http.IncomingMessage

- IncomingMessage 对象由 http.Server 或 http.ClientRequest 创建
- 传入 callback 中的第一个参数

method

- get 获取 searchParams
- post 获取 searchParams + body

### URL 处理

1. url 模块(URL 模块 & URLSearchParams 模块, 使用 WHATWG API 标准) 
2. querystring 模块

- URL 字符串是具有结构的字符串
- 包含多个意义不同的组成部分
- URL 字符串可以被解析为一个 URL 对象，其属性对应于字符串的各组成部分

分解部分

href = https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash

1. origin = https://
    - protocol = https:
    - //
2. username & password  = user:pass@
    - username = user
    - :
    - password = pass
    - @
3. host = sub.host.com:8080
    - hostname = sub.host.com
    - :
    - port = 8080
4. pathname = /p/a/t/h
5. search = ?query=string
6. hash = #hash

## http.ServerResponse

```js
res.statusCode = 200;
res.write('123');
res.end();
```