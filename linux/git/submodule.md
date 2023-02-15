# submodule

git 子模块 `git submodule xxxx`

- 需要把大项目拆分为几个小项目管理
- 多个项目有通用的业务代码(依赖主项目的依赖), 不适合放在 npm 上面

```sh
# 添加子仓库
git submodule add https://github.com/chaconinc/DbConnector --name 本地文件夹的名字
```
git 不会跟踪子模块中的内容, 提交模式是 160000, 作为一项项目目录记录提交
create mode 160000 DbConnector

```sh
# clone submodule
# 有项目目录, 但是目录里面没有内容
git clone https://github.com/chaconinc/MainProject

# 递归 init & update submodules
git clone --recurse-submodules https://github.com/chaconinc/MainProject

# 初始化配置数据 拉取内容(当时 add 时候的 commit 或者规定的 branch)
git submodule init 
git submodule update 
# 合并上面两步
git submodule update --init
# 递归拉取嵌套子模块
git submodule update --init --recursive

# 更新子模块代码
git submodule update --remote
```