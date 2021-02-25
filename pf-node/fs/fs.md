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

## acess 文件权限

### 检查权限

**调用 fs.open()、 fs.readFile() 或 fs.writeFile() 无需主动检查权限，检查权限到调用之间权限有可能会发生改变，调用错误信息里面有权限相关的错误信息，直接访问即可**

- `fs.access(path[, mode], callback)` 检查文件的某一项权限
- `fs.accessSync(path[, mode])`

文件可访问常量

F_OK 表明文件对调用进程可见, 用来判断文件是否存在
R_OK 可读
W_OK 可写
X_OK 可执行 (Windows 上无效)

### 修改权限

- `fs.chmod`
- `fs.chmodSync`

## link 链接

### hard link

- fs.link(existingPath, newPath, callback)
- fs.linkSync(existingPath, newPath)

### symbol link

- fs.symlink(target, path[, type], callback)
- fs.symlinkSync(target, path[, type])

符号链接文件

- fs.lstat() - 对普通文件而言与 fs.stat 相同 - 对链接文件(symbol link) 时候, 返回链接文件的信息, 而不是像 fs.stat 会返回源文件信息
- stats.isSymbolicLink() 判断对象描述符号链接

源文件

- fs.stat() 获取源文件 fs.Stats
- fs.readlink(path[, options], callback)/fs.readlinkSync(path[, options]) 获取源文件路径

操作符号链接文件 `fs.lXXX` 开头的方法

## fd 文件描述符

file descriptor: integer

- `fs.open(path[, flags[, mode]], callback)`
- `fs.close(fd, callback)/fs.closeSync(fd)` 操作文件完成后, 需要关闭文件

打开文件, 然后下一步对文件进行操作, 对文件的操作比如 readFile 等都是基于 open 函数获取 fd  
flags 参数决定打开文件后做什么操作
mode 仅限于创建文件时候指定文件的权限使用

- crud 的函数因为是基于 open 实现的, 所以一般都支持 fd 传入
- 其他不支持的方法 都会提供 `fs.fXXX` 版本的方法

### fs.Stat

文件信息, 和 `stat [filename]` 取得结果相同

## crud

### - 普通文件

文件内容

- 判断是否存在? fs.stat()/fs.access()/fs.existsSync(), 不使用 fs.exists()
- 读取文件
  - read
  - readFile
  - createReadStream
- 截断文件(去尾)
  - truncate
- 写入文件 truncate 0 后写入
  - write
  - writeFile
  - createWriteStream
  - appendFile 追加数据
- 删除文件

文件信息

### d 文件夹
