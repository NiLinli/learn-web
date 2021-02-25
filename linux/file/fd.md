# File descriptor

linux fd
windows 文件句柄

## fd

0: 标准输入
1: 标准输出
2: 标准错误

3+ 其他文件申请的描述符, 每打开一个文件, fd 就会递增

process table entry 存放 fd

## open

1. 在内核空间中申请一块区域, 放置打开的 file 结构体
2. fd 对应的 file 指针指向 file 结构体

### flag

附带的权限说明, 以什么方式(eg: 只读)打开文件进行操作

## close 操作

和 open 操作对应

## stat

`stat filename` linux
`stat -s filename` osx

查看文件的信息

### time

- atime=1614155734
  - 最近一次访问时间 acess
  - 以前的内核访问文件 atime 会更新, 后续版本不会
  - atime 小雨 mtime或者 ctime 时候会更新
  - ...
- mtime=1614155733 最近一次 **内容** 修改时间 modify
- ctime=1614155733 最近一次 **状态** (inode 区域的内容, mtime 改变 -> inode block 信息改变 -> ctime 改变)变更时间 change
- birthtime=1587537489
