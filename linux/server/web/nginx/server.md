# server

virtual server 虚拟主机

http block -> server block

## 请求匹配规则

1. 通过 port 匹配, *:80
2. 通过 server_name 匹配, www.omg.com:80

如果2为匹配成功, 会选用一个第一个 server 去处理 request
server_name 支持

- wildcard form
- regular expression
- 多个 server_name

## 建站方案

变量: server_name + port

有负载均衡服务器后 server_name 都指向负载均衡服务器  
虚拟主机无法获取 server_name  
一般通过不同 **port** 区分应用比较通用

### 单一虚拟主机

**所有应用都在一个域下面**, 通过 location 区分静态网站

### 多虚拟主机

不同 port 区分主机

## 缓存

## request

`$request` "GET /assets/useResponseDesign.d362ee46.js HTTP/1.1"  
`$request_body`  
`$http_name` name 是请求头的小写&_连接
  - `$http_content_type` 表示 content-type

## location

server block -> location

1. test location
2. using configuration "/admin"
3. try files handler
4. open index
5. ...

### 匹配

- 完全匹配 `=`
- 正则匹配
  - ^~   包括正则 ~  ^/admin
  - ~\* ~ 按照文件中的顺序
- 不带任何修饰符的前缀匹配(最长匹配)

```log
2021/11/25 08:30:09 [debug] 31#31: *2 test location: "/"
2021/11/25 08:30:09 [debug] 31#31: *2 test location: "admin"
2021/11/25 08:30:09 [debug] 31#31: *2 using configuration "/admin"
```

一次匹配一个就结束了

### root & alias

root http->serve->location
alias location

```nginx
location  /i/ {
  alias   /spool/w3/images/;
}

# /i/top.gif => /spool/w3/images/top.gif


location  /i/ {
  root   /spool/w3/images; 
}

# root 始终会添加文件夹
# /i/top.gif => /spool/w3/images/i/top.gif
```

### redirect

#### internal redirect

`$request_uri` 改变后, 不通知浏览器, 内部重新使用新的 `$request_uri` 去响应

- try_files
- index
- rewrite

#### http redirect

301 302 浏览器重新发送请求

### index

```text
index index.html
```

默认索引文件, index 会导致内部重定向

### try_files

try_files file ... uri;  
try_files file ... =code;

1. file:  $request_filename(file + root/alias) 判断是否满足条件
2. uri/code

满足 1 继续执行下面语句 uri 不会改变, 意义是通过校验  
不满足 1 就内部重定向到新的 uri 上面去  
判断 uri 是否满足某种条件, 不满足就是用 fallback uri 去重定向

try_files $uri $uri/ /admin/index.html;

1. $uri:  是不是一个文件
2. $uri/: 是不是一个文件夹(特殊意义, 其他的形式都是判断是不是一个文件)
3. /admin/index.html: fallback uri

/admin/

```log
2021/11/25 07:54:02 [debug] 31#31: *15 try files handler
2021/11/25 07:54:02 [debug] 31#31: *15 http script var: "/admin/"
2021/11/25 07:54:02 [debug] 31#31: *15 trying to use file: "/admin/" "/usr/share/nginx/html/admin/"
2021/11/25 07:54:02 [debug] 31#31: *15 http script var: "/admin/"
2021/11/25 07:54:02 [debug] 31#31: *15 trying to use dir: "/admin/" "/usr/share/nginx/html/admin/"     校验通过
2021/11/25 07:54:02 [debug] 31#31: *15 try file uri: "/admin/"
```

/admin

```log
2021/11/25 07:56:22 [debug] 31#31: *17 try files handler
2021/11/25 07:56:22 [debug] 31#31: *17 http script var: "/admin"
2021/11/25 07:56:22 [debug] 31#31: *17 trying to use file: "/admin" "/usr/share/nginx/html/admin"
2021/11/25 07:56:22 [debug] 31#31: *17 http script var: "/admin"
2021/11/25 07:56:22 [debug] 31#31: *17 trying to use dir: "/admin" "/usr/share/nginx/html/admin"    校验通过
2021/11/25 07:56:22 [debug] 31#31: *17 try file uri: "/admin"
```

/admin/dfalksfjlaf/dlfsjaf

```log
2021/11/25 08:03:13 [debug] 31#31: *24 http script var: "/admin/dfalksfjlaf/dlfsjaf"
2021/11/25 08:03:13 [debug] 31#31: *24 trying to use file: "/admin/dfalksfjlaf/dlfsjaf" "/usr/share/nginx/html/admin/dfalksfjlaf/dlfsjaf"
2021/11/25 08:03:13 [debug] 31#31: *24 http script var: "/admin/dfalksfjlaf/dlfsjaf"
2021/11/25 08:03:13 [debug] 31#31: *24 trying to use dir: "/admin/dfalksfjlaf/dlfsjaf" "/usr/share/nginx/html/admin/dfalksfjlaf/dlfsjaf" 校验未通过
2021/11/25 08:03:13 [debug] 31#31: *24 trying to use file: "/admin/index.html" "/usr/share/nginx/html/admin/index.html"  内部重定向
2021/11/25 08:03:13 [debug] 31#31: *24 internal redirect: "/admin/index.html?"
```

### rewrite

server & location & if

### break

停止执行 ngx_http_rewrite_module 指令集, 不影响其他指令集执行, 继续执行其他

### return

停止处理

```nginx
return code [text];
return code URL;
return URL;
```

return 200 "ok";  
return http://www.baidu.com; 等同于 return 302 http://www.baidu.com;

### rewrite

rewrite regex replacement [flag];

- last     和 break 指令部分一致, 但是不继续执行后续的其他模块指令, 直接跳到下一个 location
- break    和 break 指令一致, 继续执行其他
- redirect 等同于后续 return 302
- permanent 等同于后续 return 301

没有终止条件的话， location rewrite 之后会内部跳转

```nginx
location / {
    rewrite ^/test1 /test2;
    rewrite ^/test2 /test3 last;  # 此处发起新一轮 location 匹配
    rewrite ^/test3 /test4;
    proxy_pass http://www.baidu.com;
}

location / {
    rewrite ^/test1 /test2;
    rewrite ^/test2 /test3 break;  # 继续执行当前 location
    rewrite ^/test3 /test4;
    proxy_pass http://www.baidu.com;
}
```

