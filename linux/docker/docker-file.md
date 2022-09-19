# dockerfile

## Dockerfile 文件

1. Dockerfile -> 制作成字节的 image(二进制文件, 应用程序 + 依赖)
2. image -> container
3. 运行 container

## CMD & ENTRYPOINT

CMD:  
容器生成成功后执行的命令   
最后一个生效, 其他的会被覆盖  
docker run 会覆盖 CMD

ENTRYPOINT:  
容器生成成功后执行的命令  
最后一个生效, 其他的会被覆盖  
docker run 在 ENTRYPOINT 后面执行  
