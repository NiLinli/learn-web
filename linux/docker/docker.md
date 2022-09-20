# docker

- [docker doc](https://docs.docker.com/)
- [docker hub](https://hub.docker.com/)

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
    --add-repo https://download.docker.com/linux/centos/docker-ce.repo
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

1. 将用户加入 Docker 用户组 `sudo usermod -aG docker $USER`
2. 启动 docker `sudo systemctl start docker`

## 核心概念

### 镜像 Image

只读的文件和文件夹组合, 镜像是 Docker 容器启动的先决条件

1. 自己制作的镜像
2. docker hub 制作的镜像

#### 镜像源

修改 docker 镜像: `~/.docker/daemon.json` 文件中

```json
"registry-mirrors":["https://registry.docker-cn.com"]
```

#### build

```bash
# docker build [OPTIONS] PATH | URL | -
docker build \
  --no-cache=true \
  --build-arg FTP_PROXY=http://40.50.60.5:4567  # Dockerfile 中 ARG ENV
  -t node-demo[:tagName] \   # tag 指定 image 的名字, tagName 默认为 latest
  .      # PATH | URL | -

# 列出镜像列表
docker image ls

# 删除镜像
docker image rm [imageName]
```

### 容器 Container

容器是镜像的运行实体 = 镜像 + 运行时需要的可写文件层  

OCI 容器标准  
容器运行着真正的应用进程  
容器有初建、运行、停止、暂停和删除五种状态  
容器与主机隔离, 容器无法看到主机进程, 环境变量, 网络等信息  

```bash
# docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
docker run \     
  -d  \               # detach Run container in background and print container ID           
  -p 8000:3000 \      # 本机的 8000 端口映射到容器的 3000 端口
  --name [containerName] \  # 自定义容器名字
  IMAGE  \                  # image 文件的名字
  /bin/bash                 # 容器启动以后，内部第一个执行的命令

docker rm [containerID]
docker stop [containerID]
```

#### 特点

PID 1 不能被 kill

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
