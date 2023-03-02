# compose

每个 container 应该只做一件事强  
多个容器通信  
容器编排技术  

## network

Container networking: 两个容器挂在一个网络下, 就可以通信

### 创建 network

`docker network create todo-app`

### 容器连接

```bash
docker run -d \
    --network todo-app \      # 连接 todo-app network
    --network-alias mysql \   # container network host 
    -v todo-mysql-data:/var/lib/mysql \  #todo-mysql-data 不是一个文件夹, docker 会识别为 named volumes, 自动创建
    -e MYSQL_ROOT_PASSWORD=secret \
    -e MYSQL_DATABASE=todos \
    mysql:5.7

docker run -dp 3000:3000 \
   -w /app -v "$(pwd):/app" \
   --network todo-app \
   -e MYSQL_HOST=mysql \    # network-alias 命名
   -e MYSQL_USER=root \
   -e MYSQL_PASSWORD=secret \
   -e MYSQL_DB=todos \
   node:12-alpine \
   sh -c "yarn install && yarn run dev"
```

## docker compose

docker-compose 不一定安装了, 需要安装  `docker-compose version`

### docker-compose.yml

代替 docker run 命令

```yml
version: "3.7"

services:
  app:
    image: node:12-alpine
    command: sh -c "yarn install && yarn run dev"
    ports: 
      - 3000:3000
    working_dir: /app
    volumes:
      - ./:/app
    environment:
      MYSQL_HOST: mysql
      MYSQL_USER: root
      MYSQL_PASSWORD: secret
      MYSQL_DB: todos
  mysql:
    image: mysql:5.7
    volumes:
      - todo-mysql-data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: todos

volumes:
  todo-mysql-data:
```

### 启动 app stack

`docker-compose up -d`

```logs
[+] Running 4/4
 ⠿ Network app_default           Created                                   0.1s
 ⠿ Volume "app_todo-mysql-data"  Created                                   0.0s
 ⠿ Container app-app-1           Started                                   1.0s
 ⠿ Container app-mysql-1         Started                                   0.5s
```

- Network app_default 自动创建 & service name 是 network-alias
- app stack 服务启动的如果有顺序控制的话, 需要自行在代码中控制

## kubernetes

单台机器可以使用 docker compose  
分布式部署需要使用 kubernetes 对容器进行编排  Master-Slave(Node)

[kubernetes](https://kubernetes.io/zh-cn/)