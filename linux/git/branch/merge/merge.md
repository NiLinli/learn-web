# merge

diverged 分歧
They enable us to have parallel evolution of a code base.

## merge(主 合并 从) 步骤：

1. 当前分支为主 A
2. 需要合并的分支为 从 B
3. 两者最近的祖先 C
4. A + B + C (三者合并) = 一个新的快照 (未提交)

## merge 策略

1. 线性状态(无分歧)
    - 默认 fast-forward ,直接把 A 的指针指向 B                         -- 缺点：特性分支删除后, 不知道特性分支的的历史, 因为已经在 A 里面了
    - `--no-ff` 创建分歧 -> B 删除后保留 B 的历史状态                   -- 缺点:添加了 commit object 的数量
    - `--squash` 把 B 中的提交压缩成一个 与 A 合并 = A 上生成一个新的 (合并之后最好删除 B)
2. 有分歧
    - 默认 3-way merged
    - [rebase 方案](./rebase.md)
    - `--squash`  在 A 上新建一个 commit(与 rebase 不同 , 没有作者信息)

## 合并方式

- fast-forward 快速合并
- recursive 递归

## 取消合并

git reset --merge
