# dockerfile

## CMD & ENTRYPOINT

CMD:  
容器生成成功后执行的命令   
最后一个生效, 其他的会被覆盖  
docker run 会覆盖 CMD

ENTRYPOINT:  
容器生成成功后执行的命令  
最后一个生效, 其他的会被覆盖  
docker run 在 ENTRYPOINT 后面执行  
