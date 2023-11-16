# 算法

## 复杂度

O(n) 表示法

- n 为操作数
- 描述的是最糟糕的情形
- 速度指操作数 n 的增速, T-n 的斜率变化
- O 不同的时候, C 常量无关紧要, O 相同的时候, C 影响很大

复杂度分类

- 时间复杂度
  - logn -> n -> nlogn -> n^2 -> n!
- 空间复杂度

## 重复

重复执行一系列指令集  

### 循环

Loop/Iteration

终止条件

- 高效, 难以看懂  
- 自行追踪位置, 以及记录相应计算结果避免重复计算

### 递归 

Recursive 父问题处理逻辑 fn 分解为相同的子问题 f(与 n 相关的参数)

条件

- 基线: base case 递归终止条件, 函数不再调用自己, 避免无限循环
- 递归: recursive case 函数递归调用使用不同的参数

- 递归形成调用栈, 无需自己追踪 
- 性能问题, 函数调用栈需要内存存储函数调用信息, 如果栈很高, 会导致内存很高
  - 使用循环追踪
  - 尾递归(不是所有语言都支持)
- 重复计算问题

## 查找

采用某种方式遍历整个数据结构, 查找符合要求的场景

- 线性结构 
  - loop
- 非线形结构
  - 广度优先搜索 Breadth-first Search
    - 定义: 搜索范围从起点开始逐渐向外延伸
      1. 先检查一度关系
      2. 再检查二度关系
      3. ...
    - 实现: loop + queue(FIFO) 保存
      - 将一度关系先加入名单, 然后再将二度关系加入名单...  
      - 根据名单先后顺序检查遍历名单 queue
  - 深度优先搜索 Depth-first Search
    - 定义: 一条路走到黑
    - 实现: recursive 或者使用 stack 模拟 recursive

## 分而治之 

divide and conquer D&C

1. 找出基线条件
2. 不断将问题分解, 缩小规模, 直到符合基线条件

## 动态规划

Dynamic Programming

动态规划的一般问题是求最值
核心问题是穷举 找出最优子结构(子问题必须独立)  
通过子问题推出更大规模的问题

解题步骤:

1. 列出状态转移方程(描述问题结构的数学形式)  dp(4) 可以根据 dp(1...3) 算出来
2. 重叠子问题(消除)
3. 使用 memo/cache 或者 dp table (自低向上) 优化 (递归 -> 非递归做法)

## 贪心算法 

Greedy Algorithm
最优解

1. 选出最优解
2. 选择剩下的最优解
3. ...

每步选择局部的最优解(最优子结构), 得到的就是全局的最优解(不一定行之有效, 近似解法，因为没有考虑整体情况，未穷举一切可能)

### NP 完全问题

Non-deterministic Polynomial/多项式复杂程度的非确定性

Np 问题特点

- 时间复杂度高
- 计算所有组合才能找出最优解

#### 集合覆盖问题 Set covering problem

n 个集合
随意组合, 称为幂集(power set), 子集有 2^n 个  
穷举时间复杂度为 O(2^n)  

#### 旅行商问题

不从特定的城市出发，路线不固定

路线有 n!条数, 时间复杂度为 O(n!)

找出从每个点出发的贪婪路线进行比较

## 反向索引

Inverted Index
将正向索引反向建立 hash table, 用于 search

## 线性规划

Linear programming  
最优解的一种算法






