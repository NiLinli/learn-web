# buffer

全局, 无需 require('buffer').Buffer

- Buffer Nodejs 在 ES6 TypedArray 之前定义, 适用于 Node 环境
- Buffer 为 Unit8Array 实例
- 处理 byte 流

## 特点

1. Buffer 的大小在被创建时确定, 且无法调整, 大小是固定的
2. 且在 V8 堆外分配物理内存
3. Buffer 为 global variable
4. array-like , 值为 连个 hex 数

## CRUD

### Create


### RUD


## 字符编码的转换


显式的字符编码, 就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换