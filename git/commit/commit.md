# 提交

三颗树

- HEAD 当前分支引用的指针, 指向上一次提交的快照(即下一次提交的父结点)
- Index 预期的下一次提交的快照(可以理解为暂存区, git commit 时候 git 应该有的样子)
- Working Directory 沙盒 (工作区更改的文件都放在 .git 文件夹中, 随意修改不会影响 git)

## status

git status 会对比三颗树的状态, 给出差异

## 工作区 Working Directory

Untracked/Modified

## 暂存区 Index

`git add [filename]` 工作区 -> 暂存区

暂存和跟踪新文件

- Untracked -> Staged
- Modified -> Staged

## commit

git commit 之后, 三棵树就相同了

## reset/checkout

git reset/git checkout 根据不同参数有不同的工作范围

1. 文件范围
2. 工作区范围

### reset

`git reset --soft HEAD~ [filename]`

改变 head 指向指针的值, 改变 指针所指的对象的值, 覆盖都是很暴力的, 不做检查, 全量覆盖

1. --soft 改变 HEAD 中的文件, Work Directory + Index 中的没有改变
2. --mixed 继续改变 Index 中的文件 (默认行为)
3. --hard 继续改变 Work Directory 中的文件

压缩提交

1. 不能修改 Index + Work Directory 的文件 --soft
2. 将 HEAD 树的文件向前覆盖 HEAD~2, 或者制定 sha 值
3. 重新 git add/或者直接 commit, 形成新的提交

取消暂存文件

1. 不改变 HEAD 指向的文件, 参数为即可 HEAD, 当前复制到当前, 即没有改变 默认
2. 将 HEAD 内容复制到 Index 中, --mixed 默认值

`git reset [filename]`

### checkout

改变 head 本身指向, 改变 指针的指向, 指向其他节点

工作区 --> 取消 git checkout -- file

不带文件路径

和 `git reset --hard` 相同, 保持三棵树一致,

1. 但是对指针的操作不同
2. 它会在工作目录中先试着简单合并一下，这样所有*还未修改过的*文件都会被更新, 工作区的文件比较安全

带文件路径

## revert 回滚

没有文件层面的操作

## commit 技巧

### 修改 commit 方法

1. git rebase
2. git commit --amend 追加提交一些修改文件(修改了最后一次提交, 用一个新的提交代替最后一次提交, 提交信息相同而已)
3. git reset
4. squash

## 当前分支历史

git log 用于查看 commit 提交记录

1. `git log` 列出所有的更新
   - `-p` 每次提交的差异, 代码的差异
   - `-stat` 每个文件的简要信息, 代码变化 + -
   - `--pretty` 使用指定的格式展示提交历史 `--pretty = oneline` 一行展示
   - `-2` 限制多少条
   - `--since` 从什么时间开始...
   - ...
