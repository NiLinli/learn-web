# fs

fs 模块方法遵循 POSIX 标准(规范操作系统之间的协作性, 包括文件系统工具)

同步, 异步 两种形式
小文件使用 sync

OSX fsevents

## path

- string
- buffer
- URL(file:// 开头的)

## 文件描述符

- 每个打开的文件都会分配一个名为文件描述符的数值标识
- 在系统层，所有文件系统操作使用这些文件描述符来识别与追踪每个特定的文件

相关 API

`fs.open()` 方法用于分配一个新的文件描述符
`fs.close()` 关闭文件描述符, 系统会限制文件描述符的数量, 否则回内存泄漏, app crash

`fs.fstate()` 根据 fd 获取文件的信息

## 文件状态 

accsess

测试文件的权限, 不推荐使用, 直接使用 `fs.open()` 或者 `fs.fstate()`, 判断 err 信息

exists

是否存在, 已经废弃, 理由同上

## fs.FSWatcher 监视文件修改

`fs.watch()` 监听文件, 返回 `fs.FSWatcher`(EventEmitter) 对象

## read 

fs.ReadStream 读取文件

## write

## 同步使用的契机

代码初始化加载就是一个同步的过程, 两种结果

1. 成功加载, 进入事件轮询阶段
2. 未能成功加载, 抛出错误并且退出

文件操作失败会导致程序无法运行, 即起到和代码初始化一样的作用的操作 --> 考虑采用 sync 模式

## watch

1. watchFile 
  - 轮询(延迟)
  - 单个文件(效率低)
2. watch
  - 操作系统提供的文件更改通知机制 inotify FSEvents
  - 监听文件/文件夹
  - 改变一个文件会触发几次事件
    - 原理: 系统底层写了几次文件
    - 预期: 一次保存就是一次修改, 响应一次事件(与预期不符)
  - 部分系统 Raspbian/OSX(部分) rename 事件报告有偏差
3. chokidar 第三方封装库 印度-看门人
