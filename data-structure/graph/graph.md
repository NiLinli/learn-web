# graph 图

非线性  
记录每个节点与其相邻节点的表  

- HashTable + 线性表  
- 矩阵

模拟一组连接(不同的东西是如何连接的)

- node 节点
- edge 边

## 定义

- 邻居: 与一个节点相邻的节点成为
- degree 度: 节点相邻的 edge 数
- directed graph 有向图: 关系是单项的
- undirected graph 无向图: 没有特定指向, 关系是双向的
- cycle 环: 从一个节点触发, 走一圈后又回到这个节点(包括自环)
  - acyclic graph 无环图
- weight graph 加权图: edge 上面添加了权重(weight)
- connected graph 连通图: 任一节点都可以访问其他节点
- complete graph 完全图: 每两个节点都有一条边

## 狄克斯特拉

最快路径
找出权重最小的路径

限制

- DAG 有向无环图 directed acyclic graph
- 没有负权边(该算法假设处理过的节点, 没有前往该节点的更快路径)

步骤

1. 找出未处理过的最便宜的节点(权重最小的节点)
2. 检查该节点的邻居，检查是否有更短路径, 有 && 更新其开销
3. 重复上述过程
4. 计算最终路径

## 贝尔曼-福德算法

Moore-Bellman-Ford  
可以处理父权重
