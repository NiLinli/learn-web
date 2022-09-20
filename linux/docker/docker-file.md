# Dockerfile

build image  
docker run 的时候可以覆盖一些静态的行为  

## CMD & ENTRYPOINT

CMD:  
容器生成成功后执行的命令   
最后一个生效, 其他的会被覆盖  
docker run 会覆盖 CMD

ENTRYPOINT:  
容器生成成功后执行的命令  
最后一个生效, 其他的会被覆盖  
docker run 在 ENTRYPOINT 后面执行  

## Layer caching

## Multi-stage builds

- build 去掉
- runtime 保留

```dockerfile
# build stage
FROM node:12 AS build
WORKDIR /app
COPY package* yarn.lock ./
RUN yarn install
COPY public ./public
COPY src ./src
RUN yarn run build

# image 最后由最后一个 stage 创建
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
```

