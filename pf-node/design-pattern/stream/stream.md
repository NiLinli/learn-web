# stream

流可以是可读的、可写的、或是可读写的 所有的流都是 `EventEmitter` 的实例。
 对于以消费流对象为主的开发者，极少需要直接使用 stream 模块。

- readable  可读
- writable  可写
- duplex    可读可写 (双工)
- transform 读写过程中可以修改或者转换数据的 duplex
- classic

## 缓冲

writable.writableBuffer 缓冲

highWaterMark

stream.push(chunk) -> buffer 区

1. 达到 highWaterMark , 流会暂时停止从底层资源读取数据，直到当前缓冲的数据被消费
2. 没有达到 highWaterMark, 即可以继续 push 进缓冲区

## writable 可写流

可写流是对数据要被写入的目的地的一种抽象(类似于简单的 observer)

属性：

- `writableHighWaterMark`
- `writableLength`

实例方法：

- `write()`
- `end()`
- `cork()`
- `uncork()`
- `destory()`
- `setDefaultEncoding()`

可以监听的事件:

- `close`
- `error`
- `drain`
- `finish`
- `pipe`
- `unpipe`

## readable 可读流

可读流是对提供数据的来源的一种抽象

作用：数据传送到一个 writable , transform 或者 duplex 流

属性：

- `readableHighWaterMark`
- `readableLength`

实例方法:

- `read([size])`
- `pipe(dst)`

可以监听的事件：

- `readable`  流中有数据可供读取时触发
- `data`      流将数据传递给消费者时触发
- `close`
- `end`
- `error`

### pipe 方法

`src.pipe(dst)`

1. src 源头数据
2. dst 输出到可写的流中
3. 返回 dist

单个可读流上绑定多个可写流, 数据流将被自动管理。这样, 即使是可读流较快, 目标可写流也不会超负荷(overwhelmed)