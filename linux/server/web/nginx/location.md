# location

## 匹配

- 完全匹配 `=`
- 正则匹配
  - ^~
  - ~\* ~ 按照文件中的顺序
- 不带任何修饰符的前缀匹配

按照优先级执行返回

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
