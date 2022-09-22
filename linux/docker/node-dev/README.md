# node-dev

利用 docker 进行开发

1. bind mounts 形成 dev-mode container
2. 配置 remote inspect debugger 

## sh 

```bash
 curl --request POST \
  --url http://localhost:8009/foo \
  --header 'content-type: application/json' \
  --data '{"msg": "testing"}'

curl --request GET --url http://localhost:8009/foo
```