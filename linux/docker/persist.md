# persist

容器中挂载的为本地数据卷

## named volume

volume 容器数据持久化 my-volume:/usr/local/data

1. 创建 volume `docker volume create todo-db`
2. 挂载 volume `docker run -dp 3000:3000 -v todo-db:/etc/todos getting-started`

`docker volume inspect todo-db`

查看 volume 情况 Mountpoint
docker desktop 命令运行在一台 docker 虚拟机里面, volume 也在虚拟机中, Mountpoint 是虚拟机指向的地址

## bind mounts

本地开发阶段 dev-mode container  
本地机器不需要安装各种环境, 环境在容器中安装
本地源代码与容器绑定, 容器中引用的是本地的代码

```bash
docker run -dp 3000:3000 \
    -w /app \   # work directory
    -v "$(pwd):/app" \ # /path/to/data:/usr/local/data
    node:12-alpine \
    sh -c "yarn install && yarn run dev"
```