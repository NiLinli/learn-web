# merge

合并来源

- 当前分支 A
- 需要合并的分支 B
- 两者最近的祖先 C

合并 A + B + C

## merge 策略

diverged 分歧: C 不是 A 最新的一次提交

### 默认策略

- 无分歧默认: fast-forward, 缺点：特性分支删除后, 不知道特性分支的历史
- 有分歧默认: 3-way (recursive), 可能需要递归去查找共同祖先 

### 其他策略

`--no-ff` 

- 无分歧: 添加一个 commit object 保留被合并分支的历史状态
- 有分歧: 依然是 3-way (recursive)


`--squash`

把 B 中的提交压缩成一个, 提交到 A 上

- 无分歧/有分歧 都不会产生分歧 A B 并行(合并之后最好删除 B)
- 没有 B 作者的信息