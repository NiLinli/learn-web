# hash table

散列表/映射/字典/关联数组

## 特点

平均情况 O(C) 常数

- Insert
- Delete
- Retreive

不支持遍历, FindMax, FindMin...

## 组成

- 数组
- hash function(额外逻辑)

## collision 冲突

理想情况: hash function 运算简单, 并且不同 keyword 映射到 数组不同的位置  
现实情况: 数组大小有限, keyword 是无限的  

现实情况会导致冲突: 不同 keyword 映射到数组的同一个位置上面  

### 解决冲突

- 分离链接法: 将散列到同一个位置的元素放到一个链表
- 调整数组大小: 填装因子 = 装入的元素/数组大小 0.7 就要调整数组大小

## hash function

- hash function 与 数组的大小相关, 知道数组的大小, 只返回有效的 index
- 良好的散列函数: 数据值均匀分布
