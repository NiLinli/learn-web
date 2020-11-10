# docker

- [docker doc](https://docs.docker.com/)
- [dockerhub](https://hub.docker.com/) image 制作分享

## docker 安装

卸载旧版的 docker, **非必要**

```bash
$ sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine


```

添加 docker 安装源

```bash
$ sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

安装 docker

```bash
# 最新版本安装
$ sudo yum install docker-ce docker-ce-cli containerd.io
# 指定版本安装
$ sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io
# 查看指定版本
$  sudo yum list docker-ce --showduplicates | sort -r
```

## docker 启动

将用户加入 Docker 用户组

`sudo usermod -aG docker $USER`

启动 docker

```bash
$ sudo systemctl start docker
```

启动 docker 镜像

```bash
# 列出镜像列表
docker image ls

# 删除镜像
docker image rm [imageName]

# 运行一个 image
docker run hello-world
```

## docker 技术支撑

- Namespace (Linux 内核功能)
  - pid namespace：用于隔离进程 ID。
  - net namespace：隔离网络接口，在虚拟的 net namespace 内用户可以拥有自己独立的 IP、路由、端口等。
  - mnt namespace：文件系统挂载点隔离。
  - ipc namespace：信号量,消息队列和共享内存的隔离。
  - uts namespace：主机名和域名的隔离。
- Cgroups
  - (Linux 内核功能) 限制和隔离进程的资源使用情况（CPU、内存、磁盘 I/O、网络等）
  - 在容器的实现中，Cgroups 通常用来限制容器的 CPU 和内存等资源的使用
- UnionFS 联合文件系统
  - 写时复制
  - 镜像的分层构建和存储

## 核心概念

### 镜像 Image

只读的文件和文件夹组合, 镜像是 Docker 容器启动的先决条件

1. 自己制作的镜像
2. dockerhub 制作的镜像

修改 docker 镜像: `~/.docker/daemon.json` 文件中

```json
"registry-mirrors":["https://registry.docker-cn.com"]
```

```bash
docker build \
  --rm  \
  --no-cache=true \               # 
  -t jianghu-server[:tagName] \   # 指定 image 的名字 tagName 默认为 latest
  .                               # . 表示 Dockerfile 文件所在的路径
```

### 容器 Container

容器是镜像的运行实体 = 镜像 + 运行时需要的可写文件层  
容器运行着真正的应用进程。容器有初建、运行、停止、暂停和删除五种状态。

容器与主机隔离, 容器无法看到主机进程, 环境变量, 网络等信息

OCI 容器标准

```bash
docker run \              #
  -p 8000:3000 \          # 容器的 3000 端口映射到本机的 8000 端口
  -it  \                  # 容器的 Shell 映射到当前的 Shell，然后你在本机窗口输入的命令，就会传入容器
  --rm  \                 # 容器停止运行后, 自动删除容器文件
  --name  \               # 自定义容器名字
  [containerID] \         # image 文件的名字
  /bin/bash               # 容器启动以后，内部第一个执行的命令。这里是启动 Bash，保证用户可以使用 Shell


docker rm [containerID]
docker stop [containerID]
```

### 仓库

Docker 的镜像仓库类似于代码仓库，用来存储和分发 Docker 镜像  
相对于 npm 之于 js

## Dockerfile 文件

1. Dockerfile -> 制作成字节的 image(二进制文件, 应用程序 + 依赖)
2. image -> container
3. 运行 container
