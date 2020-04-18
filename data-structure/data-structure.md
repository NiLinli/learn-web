# Data Structure

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

## linear list 线性表

1. 同类型数据元素
2. 有序序列 的 **线性结构**

- 表中的个数称为长度
- 没有元素, 称为空表
- 起始位置为表头, 表结束位置称为表尾

### array list

数组

1. 大小必须初始化 (resizable array 可以解决)
2. insert, delete 需要移动元素

### linked list

链表: 不要求逻辑上相邻的两个元素物理上也相连

1. 大小是动态增长的
2. insert, delete 不需要移动元素, 只需要修改 link
3. 获得 size 长度比较麻烦

### Stack

堆栈

1. 收约束的线性表
2. 只在 Top 做插入删除
    - 插入 push 入栈
    - 删除 pop 出栈
3. Last in First out(LIFO)

## tree 树

对于大量的数据, 链表的线性访问时间太慢， 不宜使用。  
tree O(log N)

定义

- node (节点) + edge (边): 一棵树 tree 由 N 个节点 + (N - 1) 条 边组成
- leaf (树叶): 没有 child 节点
- sibling (兄弟): 具有相同 parent 的节点
- path (路径): 从节点 n1 到 nk 的路径定义为节点 n1, n2, ... , nk 的一个序列, 使得对于 1 <= i <= k, 节点 n_i 是 n_i+1 的 parent
  - 路径的 length 为该路径边的条数 k - 1
  - 每一棵 tree 从 root 到每个节点只存在一条路径
- depth (深度): root 到 该节点的 edge 的长度
- height (高度): 到一片 leaf 最长 edge 的长度
- 整棵树的 总深度 = 总高度

遍历方式

1. 前序遍历
2. 中序遍历
3. 后序遍历
4. 宽度遍历

### binary tree 二叉树

每个节点最多只能有两个 child

二叉查找(搜索) 树: 对于每个节点 X, left child < X < right child
