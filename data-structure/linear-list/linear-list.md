# linear list 线性表

1. 同类型数据元素
2. 有序序列 的 **线性结构**

- 表中的个数称为长度
- 没有元素, 称为空表
- 起始位置为表头, 表结束位置称为表尾

数组和链表是两种保存数据的结构  
stack/queue 是基于这两种数据结构特殊操作

## 数组

```ts
interface Array/Queue/Stack {
  array: any[];     // 实际的数组
  size: number;       // 数组大小, 有的语言 array 没有记录 length 属性
  // ... 其他需要记录的属性
};
```

## 链表

```ts
interface LinkedList/Queue/Stack {
  head: Node;
  // ... 其他需要记录的属性
};

interface Node {
  value: any;
  next: Node;
}
```
