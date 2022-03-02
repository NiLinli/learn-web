# git

分布式: 每个节点都保存了所有信息, 都可以恢复整个 git 工程

练习使用git的各种操作

参考资料

1. [git 官方手册](https://git-scm.com/book/zh/v2)
2. [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)
3. [atlassian git tutorials](https://www.atlassian.com/git/tutorials/setting-up-a-repository)
4. [git-workflow](https://sandofsky.com/blog/git-workflow.html)
5. [gitignore](https://github.com/github/gitignore)

## config

- [user] 用户相关
- [alias] 指令别名相关
- [core] git 相关配置
- ...

### 范围

- 全局 `git config --global` & `~/.gitconfig`
- 单个仓库 `git config` & `.git/config`

### 配置

- 命令: `git config [--global] user.name <name>`
- 直接修改配置文件: `git config [--global] --edit`

## protocol

### local/git

不常用

### http

- 优点: url + 验证密码, http 协议轻快和高效, 并且 **http 端口不会被防火墙禁用**
- 缺点: 频繁使用需要保存密码

#### 凭证存储

`git config --global credential.helper cache`

- 默认不存储
- cache 默认 15min
- store forever

`~/.git-credentials` 存储凭证默认位置

### ssh

- 优点: ssh 协议高效并且普遍
- 缺点: 不支持匿名访问主机, 开源 git 仓库需要架设另外一台服务器去暴露服务

[传输依赖 ssh](../server/ssh.md)