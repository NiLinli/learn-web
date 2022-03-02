# rebase

`git rebase [basebranch] [topicbranch]` topicbranch 为当前分支

A: develop branch
B: feature branch

1. 你可以提取在 B 中引入的补丁和修改, 然后在 A 的基础上应用一次
2. 使用 rebase 命令将提交到某一分支上的所有修改都移至另一分支上, 重新播放
3. 可以使非线性分支不产生分歧

## rebase 步骤

1. 找到 A B 共同祖先
2. 对比 B 相对于祖先的历次提交, 提取出来存为临时文件
3. 将临时文件依次应用于 A

两种情况：

1. apply 过程中没有冲突 fast-foward, 不会产生新的 commit
2. apply 过程中存在冲突
    - patch 失败
    - 解决冲突, 不使用提交
      1. `git add <filename>` 添加文件到暂存区 不使用 commit
      2. `git rebase --continue` 跳到下一个 apply 中去
    - 跳过冲突 `git rebase --skip` 忽略这一次 patch(提交) **慎用**

patch 文件存在于 .git/rebase 文件夹中

退出 rebase `git rebase --abort`

## 实际使用

### push 分歧

git rebase 之后, 本地与远程分支会产生分歧

`git push --force-with-lease`

适用于 rebase 导致本地和远程不能 fast-forward, 但是和 force 相比多了一个检查分支是否有其他人提交过代码

### 无分歧的合并特性分支(干净)

1. `git rebase develop`
2. `git checkout develop`
3. `git merge feature`

开发过程中可以用来更新代码

### 特性分支的特性分支

将特性分支的特性分支rebase 到 dev 上

`git rebase --onto dev server client`

dev --> server --> client

client rebase 到 dev 上

### 合并多次提交记录

`git rebase -i xxx`

提取指定的 commit 记录, 然后交互式一条一条编辑

`git rebase -i  [startpoint]  [endpoint]`

- startpoint
- endpoint 如果不填, 就表示当前 HEAD point 指针

`git rebase -i HEAD~2`

- HEAD 指向位置, 最近几次

需要指明对每此每次提交做什么什么操作:

- pick 保留这一次提交
- squash 合并当前一条和上一条信息(修改两条)

## 问题

不要对在你的仓库外有副本的分支执行 rebase
只要你把变基命令当作是在推送前清理提交使之整洁的工具，并且只在从未推送至共用仓库的提交上执行变基命令

同一远程分支

1. A 推送了经过 rebase 的提交到远程
2. B 不要 merge , 不然 AB 公共的部分会在 分歧存在一份, 也会在 A 中存在一份
3. B rebase 远程 A 合并过的最新分支 `git pull --rebase` `git fetch && git rebase origin/topicBranch`
