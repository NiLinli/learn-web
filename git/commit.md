# 提交

- git status 用于查看工作区和暂存区
- git log 用于查看 commit 提交记录

## 工作区

Untracked/Modified

工作区 --> 暂存区
工作区 --> 取消 git checkout -- file

## add/reset 暂存区

暂存和跟踪新文件[暂存区]

- Untracked -> Staged
- Modified -> Staged

git add [filename]
git reset HEAD file

## commit/reset 工作区

git commit
git reset HEAD [filename]

## commit 技巧

### 修改 commit 方法

1. git rebase
2. git commit ammend
3. git reset
4. squash

#### git rebase -i

提取指定的 commit 记录, 然后交互式一条一条编辑

`git rebase -i  [startpoint]  [endpoint]`

- startpoint
- endpoint 如果不填, 就表示当前 HEAD point 指针

`git rebase -i HEAD~2`

- HEAD 指向位置, 最近几次

需要指明对每此每次提交做什么什么操作:

- pick 保留这一次提交
- squash 合并当前一条和上一条信息(修改两条)

## HEAD 操作

## 当前分支历史

1. `git log` 列出所有的更新
   - `-p` 每次提交的差异, 代码的差异
   - `-stat` 每个文件的简要信息, 代码变化 + -
   - `--pretty` 使用指定的格式展示提交历史
      + `--pretty = oneline` 一行展示
   - 限制输出长度
      + `-2` 限制多少条
      + `--since` 从什么时间开始...
      + ...

## 相关命令

`git checkout`

1. 切换分支
2. 取消文件修改

git reset
git revert