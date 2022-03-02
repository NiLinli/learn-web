# remote

Retrieve(常用)

`git remote`  列出所有的远程主机, 远程主机需要一个主机名 (自动命名为 origin)
`git remote -v` 查看远程主机网址  
`git remote show origin` 详细信息

不常用:

`git remote add <主机名> <网址>` C
`git remote rm <主机名>` D  
`git remote rename <原> <新>` U

## 远程分支与本地分支

`git branch -vv` 查看关联信息详情

分支的互相创建:

- 新建本地分支  - 推送给 -> 新建远程分支 `git push origin <本地>:<远程>`
- 远程分支
    1. 拉取到 -> 新建本地分支
       - `git checkout -b [branch] [remotename]/[branch]` (clone 时候自动 `git checkout -b master --track origin/master`)
    2. 跟踪分支: `git branch --set-upstream-to[-u] origin/my` 后续关联 本地当前与远程匹配
    3. 上述两步可以直接 `git checkout -b [branch]  --track [remotename]/[branch]`

## 本地管理远端分支

- `git push origin --delete [branchname]`   删除远程分支
- `git remote prune origin`                 清理远端的分支缓存
- `git fetch -p`

## fetch

1. 查看其他远程最新代码
2. 取回的代码对你本地的开发代码没有影响  

`$ git fetch <远程主机名> [<分支名>]`

取回结果处理：  

- `git merge origin/master`                 合并到本地分支, 想过等同于 pull
- `git checkout -b newBranch origin/master` 新建分支查看代码

## pull

步骤：

1. `git fetch` 取回远程主机分支信息
2. `git merge origin/xxx` 与本地关联分支合并  

`git pull <远程主机名> <远程>:<本地>` 指令缩写：

1. `git pull origin develop:develop`  完整
2. `git pull origin develop`          省略本地分支名(默认相同)
3. `git pull`                         省略主机名

## push

`git push origin <本地>:<远程>` 指令缩写

1. `$ git push origin master:master`  完整
2. `$ git push origin master`         省略远程分支名(默认相同)
3. `$ git push`                       省略主机名

远程存在就新建远程

- `--force` `-f` 强制提交
