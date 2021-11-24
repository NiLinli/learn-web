# location

`$request_uri`

## 匹配

- 完全匹配 `=`
- 正则匹配
  - ^~
  - ~\* ~ 按照文件中的顺序
- 不带任何修饰符的前缀匹配

按照优先级执行返回

## index

```text
index index.html
```

默认索引文件

## root & alias

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

## redirect

### internal redirect

`$request_uri` 改变后, 不通知浏览器, 内部重新使用新的 `$request_uri` 去响应

### http redirect

301 302 浏览器重新发送请求

## try_files

一般作用于静态动态 html

try_files $uri $uri/ /admin/index.html;

- 正常访问: /admin/ =>  /admin/index.html
- 路径不全访问: /admin  => 301  server_name + port + /admin/
- history 模式访问: /admin/permission/list => /admin/index.html

## rewrite

server & location & if

### break

停止执行 ngx_http_rewrite_module 指令集, 不影响其他指令集执行, 继续执行其他

### return

停止处理

```
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


```
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
