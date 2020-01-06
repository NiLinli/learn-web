# tag 标签

- `git tag` 查看所有便签
  - `git tag -l 'v1.*'` 查看以1. 开头的标签名
- `git show v1.2` 查看某一个标签的具体信息

## lightweight 轻量标签

- `$ git tag v1.1`

## annotated 附注标签

- `$ git tag -a v1.4 -m 'my version 1.4'` v1.4 信息为 'my version 1.4'

## 创建方式

1. 当前 commit 之后创建 `git tag v1.2`
2. 补上之前 commit 标签 `git tag v1.2 9fceb02`

## 推向远端 remote

- `git push origin v1.5` 推送某一个具体的 tag
- `git push origin --tags` 推送不在远程仓库服务器上的所有标签

1. git push 命令并不会传送标签到远程仓库服务器上
2. 在创建完标签后你必须显式地推送标签到共享服务器上

## 检出标签

不能像 commit 指针一样移动, 只能创建一个新的分支 `git checkout -b version2 v2.0.0`