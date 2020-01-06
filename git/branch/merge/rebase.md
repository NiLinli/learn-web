# rebase

A: develop branch
B: feature branch

1. 你可以提取在 B 中引入的补丁和修改, 然后在 A 的基础上应用一次
2. 使用 rebase 命令将提交到某一分支上的所有修改都移至另一分支上, 重新播放
3. 可以使非线性分支不产生分歧

## rebase步骤

1. 找到 A B 共同祖先
2. 对比 B 相对于祖先的历次提交, 提取出来存为临时文件
3. 将临时文件依次应用于 A

## 操作

1. `git rebase develop`
2. `git checkout develop`
3. `git merge feature`

两种情况：

1. apply 过程中没有冲突 fast-foward , 不会产生新的 commit
2. apply 过程中存在冲突
    - patch 失败
    - 解决冲突, 不使用提交 使用 `git rebase --continue`
    - 跳过冲突 `git rebase --skip`

## 实际使用