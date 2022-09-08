# process manage

## command

```bash
# 运行
command 

# 放入后台运行, 生命周期与终端相同
command &

# 查看背景工作
jobs

# 背景当中的程序由 stopped 变成 Running
bg %pid

# 移到前台
fg %pid
```

- ctrl + c 中断目前程序
- ctrl + z 放入背景工作中(stopped 状态)

## ps

process status 查看当前运行的程序

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

## kill

`kill -signal pid`

signal:

- 1 (HUP): 重新加载进程
- 9（KILL）: 直接强制杀掉一个程序
- 15（TERM）: 正常停止一个程序

`kill -9 12345`  
`kill -9 $(ps -ef | grep nginx)`

## daemons

守护进程

`/etc/services` 记录网络服务和其端口映射表
`<daemon name> <port 与型态> <该服务的说明>`

