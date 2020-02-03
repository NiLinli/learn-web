# linux

文本模式登录 shell 程序

用户登录

`[账号 @主机名 当前目录]`
光标在其后面表示可以输入 shell command, 其他情况下是进入了一些软件程序内

退出当前用户的登录 `exit`

## 关机

linux 存在多人使用的情况, 所以不应该强制关机

1. 查看系统使用状态
  - `who` 谁在使用
  - `ps -aux` 后台运行程序
  - ...
2. 通知在线使用者关机时刻
3. 正确使用关机命令
  - `sync` 将内存中的数据(频繁读写, 所以放在内存中)写入硬盘, 最好多运行几次, 常用的关机命令执行前都会自动调用 `sync`
  - `shutdown`

shutdown

-h 将系统的服务停掉后，立即关机  
-r ...., 立即重新启动

`shutdown -h now` 马上关机
`shutdown -h +10` 10 分钟后关机
`shutdown -r` 重启
`init 0` 切换 run level 达到关机的效果

## shell command

`command [-options] param1 param2 ...`

无论多少空格都视为一个空格
区分大小写

- `man command` 查询命令详情, q 键退出
- `info command` 在线查询
- `/usr/share/doc/...` 可以查询一些软件安装的说明文档

## shell 热键

- `[Tab]` 文件补全, 命令补全
- `[Ctrl] + c` 中断目前程序
- `[Ctrl] + d` 键盘输入 End Of File(EOF), 很多程序检测到输入 EOF 就会退出程序

## 账户

### 登录

ssh 或者 telnet 连接主机, 然后需要 username + pwd 进行登录

1. 在 `/etc/passwd` 查看是否存在账号? 存在独处 userId(UID) groupId(GID)
2. 在 `/etc/shadow` 查看密码是否对应?
3. 进入 shell

### 账号管理

- `/etc/passwd` user 信息
- `/etc/group` group 信息

`root:*:0:0:System Administrator:/var/root:/bin/sh`  
账号名称:密码:UID:GID:说明:home 目录:用户所使用的 shell

- `/etc/shadow` user 密码管理
- `/etc/gshadow` group 密码管理

### SID

sid 0 为 系统管理员

### GID

group id

### 账号新增

```bash
# 添加 group
groupadd [-g GID] groupname
-g 指定 groupId

# 删除 group
groupdel groupname

# 添加 user
useradd [-u UID] [-g GID] [-d HOME] [-mM] [-s shell] username
-u 指定 userId
-g 添加到对应的 groupId 组内
-d 指定 HOME 目录
-s 定义其指定的 shell

# 删除 user
userdel [-r] username
-r 删除所有相关目录 [home directory] + [/var/spool/mail/username]
```

### 更改账号信息

```bash
# [-s shell] 改变当前用户的 shell
chsh [-s shellname] [-l]
-s 指定 shell
-l 列出所有 shell 的 list

# 修改密码(当前用户)
passwd

# 修改密码(root 给其他用户)
passwd [username]
```

### 使用身份切换

`/etc/sudoers` 设定可以使用 sudo 执行 root 权限的 user

- 使用 `visudo` 修改 `/etc/sudoers`

```bash
# User privilege specification

```

```bash
# 切换为 root, 但是环境变量还是原账户的
su

# 将环境变量切花到 root
su -

# 切换到一般账户
su username

# 切换到 root 执行命令(输入当前身份的密码即可, 防止了密码泄露)
sudo [command]

# root 切换到相应的 username 执行相应的 shell script
sudo [-u username] [command]
```

### 当前身份信息

```bash
# 查看 userId
id [username]

# 查看当前用户所在的 groupId
groups [username]

# finger
finger [-s] username
```

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

## 资源管理

查看当前运行的程序(背景执行)

`ps -aux`

- a 所有程序
- u 所有用户
- x 所有 ttf 程序

`USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND`

- USER：说明该程序是属于哪一个人
- PID：该程序的代号
- %CPU：代表该程序使用了多少 CPU 资源
- %MEM：代表该程序使用了多少的 RAM
- VSZ, RSS：占去的 ram 的大小 (bytes)
- TTY：是否为登入者执行的程序？若为 tty1-tty6 则为本机登入者，若为 pts/?? 则为远程登录者执行的程序
- STAT：该程序的状态
  - ( R )为可执行的
  - ( S )为该程序正在睡眠中，就是没有执行了
  - ( T )正在侦测或者是停止了
  - ( Z )僵尸程序，就是 zombie 死掉的程序啦！需要以 kill 除去啰！
- START：该程序开始的日期
- TIME：该程序跑了多久的时间？
- COMMAND：该程序的内容啦

`top` 动态查询程序执行情况

`free` 显示内存使用情况

`kill -signal PID`
-9: 杀掉该程序  
-15: 停止该程序

### 背景工作

```bash
# 放入后台运行
command &

# 查看背景工作
jobs

# 背景当中的程序由 stopped 变成 Running
bg %jobnumber

# 移到前台
fg %jobnumber

# 杀掉背景程序
kill -signal %jobnumber
-1: reload
-2: ctrl + c
-9: 直接杀掉一个程序[强制]
-15: 停止一个程序
```

ctrl + z 可以把程序放入背景工作中, 但是是 stopped 状态

## 守护进程

daemons

`/etc/services` 记录网络服务和其端口映射表
`<daemon name>   <port 与型态>   < 该服务的说明 >`
