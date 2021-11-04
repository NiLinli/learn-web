# tree 树

无环无向图

## 定义

- node (节点) + edge (边): 一棵树 tree 由 N 个节点 + (N - 1) 条 边组成
- leaf (树叶): 没有 child 节点
- sibling (兄弟): 具有相同 parent 的节点
- path (路径): 从节点 n1 到 nk 的路径定义为节点 n1, n2, ... , nk 的一个序列, 使得对于 1 <= i <= k, 节点 n_i 是 n_i+1 的 parent
  - 路径的 length 为该路径边的条数 k - 1
  - 每一棵 tree 从 root 到每个节点只存在一条路径
- depth (深度): root 到 该节点的 edge 的长度
- height (高度): 到一片 leaf 最长 edge 的长度
- 整棵树的 总深度 = 总高度

## 遍历方式

### 普通树

1. 深度 dfs
2. 广度 bfs

### 二叉树

深度遍历特例区分

1. 前序遍历
2. 中序遍历
3. 后序遍历

父节点出现的顺序

## 普通树

子节点放到 Array 里面, 父级别指向 arr[0]

## binary tree 二叉树

二叉树是一种特别的树, 有很多处理方式

对于大量的数据, 链表的线性访问时间太慢， 不宜使用。  
tree O(logN)

特点

- 每个节点最多只能有两个 child
- left child 和 right child 顺序不能调换

存储方式

- 顺序存储: 下标和节点之间有逻辑关系
- 链式存储

### 二叉查找(搜索) 树

对于每个节点 X, left child < X < right child
