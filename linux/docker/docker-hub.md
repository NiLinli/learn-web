# docker hub

## 推送镜像

1. `docker login`
2. 创建一个远端仓库命令的镜像
  - 直接打包命名 `docker build -t <hub-user>/<repo-name>[:<tag>]`
  - 根据本地的 IMAGE 创建一个新的 IMAGE `docker tag <existing-image> <hub-user>/<repo-name>[:<tag>]`
3. `docker push <hub-user>/<repo-name>[:<tag>]`

## 登陆

docker login -u nixixi -p 123456 [Server]