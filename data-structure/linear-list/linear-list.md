# linear list 线性表

1. 同类型数据元素
2. 有序序列 的 **线性结构**

- 表中的个数称为长度
- 没有元素, 称为空表
- 起始位置为表头, 表结束位置称为表尾

数组类型的线性表: 数组 + 加一些属性 (size, top, front) 等等附加属性
链表类型的线性表: Node 节点 + 保存有第一个节点地址的结构, 通常起名为 head

## Stack 堆栈: 同一端进出

1. 收约束的线性表
2. 只在 Top 做插入删除
   - 插入 push 入栈
   - 删除 pop 出栈
3. Last in First out(LIFO)

## Queue 队列: 一端进, 另外一端出

1. 收约束的线性表
2. Front 队列头 enqueue
3. Rear 队列尾部 dequeue
