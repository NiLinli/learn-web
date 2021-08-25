# Stream

- `Steam` 都是 `EventEmitter` 的实例, 所以暴露了很多 event 出来
- 一般开发都是在消费 Stream, 很少情况会直接使用 Stream 模块
- 流数据的类型(取决于直接创建 Stream 的 API, 有些 API 提供了参数):
  - 字符串
  - Buffer/Uint8Array 等类 Buffer

类别

- readable 可读
- writable 可写
- duplex 可读可写 (双工)
- transform 读写过程中可以修改或者转换数据的 duplex
- classic

## 缓冲

writable.writableBuffer 缓冲

highWaterMark

stream.push(chunk) -> buffer 区

1. 达到 highWaterMark , 流会暂时停止从底层资源读取数据，直到当前缓冲的数据被消费
2. 没有达到 highWaterMark, 即可以继续 push 进缓冲区

## writable 可写流

可写流是对数据要被写入的目的地的一种抽象

- 写入可写流的时候，需要考虑背压
- 可以被 pipe 传入，已经处理了背压

## readable 可读流

可读流是对提供数据的来源的一种抽象

- 作用:不需要一次操作全部内容, 分次去取 比如数据传送下游的 writable , transform 或者 duplex 流
- 副作用: 是如果需要全部内容, 需要自己去拼全部的内容(比如取 http.IncomingMessage 中的 json或者其他文本数据类型的数据) **通过流拼接获取全部内容需要考虑字符串转码问题**

模式

- 暂停模式(默认): readable + read() 方式显示去取数据, 控制更加精细
- 流动模式
  - 监听 data 事件自动切换/调用 pipe() 方法
  - 显示调用 resume() 方法

### pipe 方法

## duplex

## transform
