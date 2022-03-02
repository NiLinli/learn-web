# 分支操作

分支是指向提交对象的 **可变指针**

切换分支时改变head的指向，然后commit 就提交到相应的 branch 中  

- `git log --oneline --decorate --graph --all` 项目分叉历史
- `git log --oneline --decorate` 查看head指向  
- `git log --oneline --decorate --graph --all` 查看所有分支

## 新建分支

1. `git branch <新分支名> [<基于的分支>]`      新建分支  
2. `git checkout <新分支名>`                  切换到分支  
3. `git checkout -b <新分支名> [<基于的分支>]` 依次走完上述两种

## 分支切换

当检出一个分支时，

1. 修改 HEAD 指向新的分支引用
2. 将 Index 填充为该次提交的快照
3. 将 Index 的内容复制到 Work Directory 中

所以切换完成后, 三棵树保持一致, 不会产生违和感.

HEAD pointer -> 指向当前工作的指针(checked out branch or commit)

checkout

Not only can we check out branches, we can also checkout any commit revision explicitly.

切换之前项目必须要保证是提交完的, 即干净的分支, 如果没有提交, 可以考虑 [储藏和清理](stashing-clean.md)

## 删除分支

- `git branch -d <branchName>` 删除本地分支
- `git push origin --delete <branchName>` 删除远程分支

## 分支管理

1. `git branch` 列出所有分支
    - `-v` 所有分支最后一次提交时间
    - `--merged`
    - `-a` 列出所有分支(包括远程分支)
2. `git branch` 当前分支的操作
    - `--no-merged` 没有合并到当前分支
    - `--merged` 已经合并到当前分支
3. `git branch -d` 删除分支(分支未被合并, 不能删除)

## 分支合并

1. [merge](./merge/merge.md)
2. [rebase](./rebase.md)

## 通用分支管理

- [successful-branch-model](./successful-branch-model.md)
