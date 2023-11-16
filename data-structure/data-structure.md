# Data Structure

- [visualgo](https://visualgo.net/zh)
- [javascript-algorithms]https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md

## 基本结构

数据结构存储(内存中表现形式只有两种)

- 数组
  - 顺序存储
  - 线性结构
  - 连续内存空间, CPU 操作更加高效 (内存访问 Cache 方面)
  - 查询快, 扩容/插入/删除不方便
- 链表
  - 链式存储
  - 线性结构 + 非线性结构
  - 内存不连续, 不高效
  - 查询无索引需要遍历, 扩容/插入/删除方便

操作

- 线性
  - 遍历 loop
- 非线性
  - 遍历 recursive/loop
  - 链式

### 链式结构

线性表/tree
```ts
interface A {
  ['root' | 'head']: Node;
  // ... 其他数据结构需要记录的信息
}

interface Node {
  value: any;
  // ... 节点的信息
}
```

## 面试重点

- 链表
  - 添加和删除
- 二叉树
  - 遍历(循环)
  - 遍历(递归)
- 查找
  - 二分查找
- 排序
  - 归并排序
  - 快速排序
