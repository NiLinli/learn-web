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

## command 风格

- UNIX 风格，选项可以组合在一起，并且选项前必须有“-”连字符
- BSD 风格，选项可以组合在一起，但是选项前不能有“-”连字符
- GNU 风格的长选项，选项前有两个“-”连字符




