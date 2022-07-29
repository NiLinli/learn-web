# rebase

`git rebase [basebranch] [topicbranch]` topicbranch 为当前分支

- A: main branch
- B: feature branch

效果: 找到 AB 祖先, 提取在 B 上的 commit, 在 A 最新一次提交的基础上 apply  
作用: 合并无冲突, 无分歧

## rebase 过程

apply 无冲突  
fast-forward, 不会产生新的 commit, 仅仅改写 commit history

apply 有冲突  

- 解决冲突, 不使用提交 commit
  1. `git add <filename>` 添加文件到暂存区 不使用 commit
  2. `git rebase --continue` 跳到下一个 apply 中去
- 跳过冲突 `git rebase --skip` 忽略这一次 patch(提交) **慎用**
- 中止 apply
  - `git rebase --abort`
  - 删除 patch 文件 `.git/rebase`

## force push

git rebase 之后, 本地与远程分支会产生分歧  
适用于 rebase 导致本地和远程不能 fast-forward

`git push --force-with-lease` 检查分支是否有其他人提交过代码

## 合并提交

`git rebase -i [startpoint] [endpoint]`

interactive 交互式的 (pick 指定范围的 commit 记录, 然后交互式一条一条编辑)

- startpoint 起始点
- endpoint   终止点, 默认 HEAD

操作命令

- pick   保留这一次提交
- squash 合并当前一条和上一条信息(修改两条)

操作完成后修改提交信息

合并多次提交: 起始提交 pick, 其他提交 squash, 然后修改起始提交的 commit message

`git rebase -i HEAD~2` 最近两次(HEAD== HEAD~1)



## 多人开发一个分支使用 rebase

不要对在你的仓库外有副本的分支执行 rebase
只要你把变基命令当作是在推送前清理提交使之整洁的工具，并且只在从未推送至共用仓库的提交上执行变基命令

- `git pull --rebase`
- `git fetch && git rebase origin/topicBranch`
