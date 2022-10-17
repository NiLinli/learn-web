# IO

IO 在计算机中被视为 stream  

## stream

A stream is a sequence of data.

对于 Program 而言

- uses an input stream to read data from a source
- uses an output stream to write data to a destination

IO stream

- program
- device
- network socket
- ...

stream 分类

- byte stream 
  - 最基本的 stream
  - stream 单位为字节
- char stream 
  - 包装 byte stream
  - stream 单位为字符
  - char **并不**代表变成语言中的 char 类型, 而是根据 stream 编码类型计算的一个字符

## buffer

程序内存区域作为缓存区, 每次直接请求 OS API 去操作 stream 会导致资源浪费

- triggers disk access
- network activity
- other os operation 

Buffered streams

- input: 在 buffer 中读取数据, buffer 空了或者不足了再去请求 OS API 读取实际 stream 填充 buffer
- output: 将数据写入到 buffer 中, 写满或者时机适合再调用 OS API 写入到实际的 stream 中

Flushing the buffer

- 使用完成后
- autoflush

## pipe

管道  
输入流 -> 管道 -> 输出流

- 不需要输入全部写入到内存 buffer 中(消耗大量的内存), 再写入到输出流
- 管道优化点
  - 管道流量控制
  - 管道所需的内存控制

## serialization

序列化: 程序对象 -> stream  
反序列化: stream -> 程序对象  

stream 可以是文件, 字符串, 文本文件...

## 文件

- 二进制文件: 所有文件都是二进制的
- 文本文件: 文本文件是特殊的文本文件, 便于读写, 所以单独分类

特殊标识

- 文件结尾 EOF
- 换行符 LF/CRLF

配置文件风格

- unix 喜欢用文本文件来做数据存储和程序配置
  - 方便人类读写, 而且跨平台
  - 程序 IO 需要编码格式化, 开销大
- dos/window 喜欢用二进制文件(草根文化), 用注册表(注册表编辑器)
  - 读写快
  - 编码定义不相同导致移植性差
  
## IO 编码

如果IO stream 中的数据被认为是文本, 则会涉及到编码

- 源代码编码
- 内存中字符串用什么编码
- IO 用什么编码 需要告知程序, 不然程序不知道用什么编码与 IO 交互 
  - command line
  - file
  - network

## 标准 IO

这里不指缓存IO, byte stream  
标准 IO 也是一个文件  
程序中一般是以输入 Enter 键开始读取

- stdin fd 0 键盘输入
- stdout fd 1
- stderr fd 2

程序中改变程序对应的 io, 或者程序执行时改变标准 io 指向

```sh
./a.out <123.in # stdin 
./a.out >123.out # stdout 
./a.out 1>123.out # stdout 
./a.out 2>123.out # stderr
```

文件转发到 stdio

```sh
ln -sf /dev/stdout /var/log/nginx/access.log \
ln -sf /dev/stderr /var/log/nginx/error.log \
```

## 系统 IO

对文件底层访问函数

## 缓存 IO

调用系统 IO, 并提供函数或者是对象引用, 在 C 语言中称为标准 IO 

- 访问 fd 0 1 3 包装标准 IO
- 访问普通 fd 文件包装文件 IO





