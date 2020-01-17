# commit

## 取消文件的修改[工作区]

Modify -> Unmodify

git checkout -- [filename]

## 暂存和跟踪新文件[暂存区]

Untracked -> Staged
Modified -> Staged

git add [filename]

## 取消将文件放入暂存区

和 add 操作相反

git reset HEAD [filename]

## 修改 commit 方法

1. git rebase
2. git commit ammend
3. git reset
4. squash

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