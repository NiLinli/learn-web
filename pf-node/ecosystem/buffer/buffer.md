# buffer

全局, 无需 require('buffer').Buffer

- Buffer Nodejs 在 ES6 TypedArray 之前定义, 适用于 Node 环境
- Buffer 为 Unit8Array 实例
- 处理 byte 流

## 特点

1. Buffer 的大小在被创建时确定, 且无法调整, 大小是固定的
2. 且在 V8 堆外分配物理内存, 直接操作 Buffer, 非必要不转换为 string
3. Buffer 为 global variable
4. array-like , 值为 连个 hex 数

## 字符编码的转换

- Node 运行时候, 内存中 string 变量转 Buffer
- Buffer 转化成 string

转换都需要指定字符编码  
不支持 gbk 等中文编码转换
