## 例行性命令(定时任务)

- `at` 执行一次
- `crontab` 循环执行

### crontab

```bash
# crontab 操作
crontab [-u user] [-l | -e | -r]
-l 列出
-e 编辑
-r 删除
```

- `/var/spool/cron/[username]` 这个文件中
- `/etc/crontab` 系统级别直接编辑这个文件

`0 12 * * * mail test < /home/test/test.txt`  
`分 时 日 月 周 |========指令列===============|`

适合做的事情

- 数据定时备份 (登录数据)
- rpm 数据库的建立
- ...

### at

```bash
# 下达指令
at [-m] TIME

# 查看已经下达的指令
atq

# 删除下达的指令
atrm [jobnumber]
```

需要 atd 服务的支持, 默认启动, 如果没有启动(centos 中不自带, 需要下载)

```bash
# red hat 系统
ntsysv   # 选择 ant

# Mandrake
ckconfig --add atd
ckconfig --list

# centos
```

`/var/spool/at` 需要执行的操作记录在这个文件当中

适合做的事情


