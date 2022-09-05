# nginx

- 静态服务器
- 网关服务器

## install

需要前提工具

- gcc
- pcre pcre-devel
- zlib zlib-devel
- openssl openssl-devel

1. 下载依赖 `yum install -y gcc pcre pcre-devel zlib zlib-devel openssl openssl-devel`
2. 下载 nginx 安装包
    1. cd /usr/local/nginx
    2. wget https://nginx.org/download/nginx-1.15.7.tar.gz
    3. tar -zxvf nginx-1.15.7.tar.gz
3. 配置 `sudo ./configure`
    - --prefix=/usr/local/nginx
    - --with-stream
    - --with-debug   开启 debug 日志
4. 编译 `sudo make && make install`

## sbin

```bash
./nginx    # 启动 nginx

./nginx -t # 测试配置文件是否正确
./nginx -v # 版本号
./nginx -V # 版本号和详细信息

./nginx -s # -s signal
./nginx -s reload # reloading the conf file
./nginx -s reopen # reopening the log files
./nginx -s stop   # fast shutdown
./nginx -s quit   # graceful shutdown 等待 worker process 全部服务完成后结束, 必须是同一用户开启的才会被执行
kill -15 1628 # graceful shutdown
```

## 进程查看

```bash
# 查看 nginx 进程
ps -aux | grep nginx

root     10400  0.0  0.1  24864  1408 ?        Ss   09:29   0:00 nginx: master process ./nginx
nobody   10706  0.0  0.1  25288  1812 ?        S    11:02   0:00 nginx: worker process

# 查看网络端口占用情况
netstat -tnlup | grep nginx

tcp  0  0 0.0.0.0:80  0.0.0.0:*  LISTEN  10400/nginx: master
```

## nginx 日志

可以设置 日志格式  
安装配置时可以选择打开 debug 级别的日志便于调试  

## nginx 配置

`config/nginx.conf` 配置文件, 配置项称为**指令**

directive

- simple directives.  分割通过 space & 结束 semicolon
- block directives. {}

context

- main context
- block context

measurement units

- ms milliseconds
- s	seconds
- m	minutes
- h	hours
- d	days
- w	weeks
- M	months, 30 days
- y	years, 365 days








