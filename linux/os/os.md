# linux

`cat /proc/version` 查看 linux 发行版  

https://command-not-found.com/chvt

## alpine

linux 发行版  
apk

## tty

Teletypewriter:  input/output device.

TTY is an **abstract device** in UNIX and Linux.

- physical input device such as a serial port.
- virtual TTY where it allows users to interact with the system. Terminal

`/dev/tty`

- `tty` 查看当前 tty

## 文件目录

### 常用目录

- /bin Binaries 常用命令
- /sbin root 用户使用的指令
- /temp 临时文件
- /boot 启动 Linux 时使用的一些核心文件
- /lib 系统最基本的动态连接共享库
- /lost+found 非法关机后，这里就存放了一些文件
- /mnt Mount 临时挂载别的文件系统
- /etc Etcetera等等的意思 存放配置文件
- /usr Unix Shared Resources(共享资源) 软件安装位置
  - /lib
  - /bin
  - /sbin
  - /local 软件安装目录
  - /share
  - /temp
- /var Variable 变化的东西, 日志
  - temp
- /dev 存放设备文件 IO 等
- ...

### 用户目录

- /root root 用户目录
- /home or /Users  ~ 目录

## shell 命令

`command [-options] param1 param2 ...`

无论多少空格都视为一个空格
区分大小写

- `man command` 查询命令详情, q 键退出
- `info command` 在线查询
- `/usr/share/doc/...` 可以查询一些软件安装的说明文档

## shell 热键

- `[Tab]` 文件补全, 命令补全
- `[Ctrl] + d` 键盘输入 End Of File(EOF), 很多程序检测到输入 EOF 就会退出程序
- `[Ctrl] + c` 中断目前程序
- `[Ctrl] + z` 放入背景工作中(stopped 状态)

## command 风格

- UNIX 风格，选项可以组合在一起，并且选项前必须有“-”连字符
- BSD 风格，选项可以组合在一起，但是选项前不能有“-”连字符
- GNU 风格的长选项，选项前有两个“-”连字符

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