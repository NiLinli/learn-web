# 提交

三颗树

- HEAD
  - 当前分支引用的指针
  - 指向上一次提交的快照/即下一次提交的父结点
- Index
  - 可以理解为暂存区
  - 预期的下一次提交的快照
  - git commit 之前的状态
- Working Directory
  - 工作区
  - 当前修改的未放入暂存区的
  - 沙盒 更改的文件都放在 .git 文件夹中, 随意修改不会影响 git

## status

git status 会对比三颗树的状态, 给出差异

## 工作区 Working Directory

Untracked/Modified

`git checkout -- file` 工作区 -> 检出文件, 干掉

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

```
const commitObj = { hash: 123231, v: some+version, file1....};
const head = commitObj;
// git reset
commitObj = { hash: 823947, v: other+version, file111....};
```

- 改变 head 所指commit本身
- 会改变 branch 的提交
- 全量覆盖(暴力)

1. --soft  移动 Head (取出这次提交)
2. --mixed 取出的提交放入暂存区, 将原有暂存区内容放入工作区
3. --hard  取出的提交放入工作区, 将原有工作区的内容干掉

取出的提交放入哪棵树, 那棵树就和 Head 保持一致, 没有变更

#### 压缩提交

1. 不能修改 Index + Work Directory 的文件 --soft
2. 将 HEAD 树的文件向前覆盖 HEAD~2, 或者制定 sha 值
3. 重新 git add/或者直接 commit, 形成新的提交

#### 取消暂存文件

1. 不改变 HEAD 指向的文件, 参数为即可 HEAD, 当前复制到当前, 即没有改变 默认
2. 将 HEAD 内容复制到 Index 中, --mixed 默认值

`git reset [filename]`

### checkout

`git checkout [filename]`

```
const commitObj = { v: some+version, file1....};
const head = commitObj;
// git checkout
hard = { v: other+version, file111....};
```

- 移动 head 指针

#### 切换分支(移动 head)

保持三棵树一致

- 工作目录中先试着简单合并一下，这样所有*还未修改过的*文件都会被更新, 工作区的文件比较安全

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
