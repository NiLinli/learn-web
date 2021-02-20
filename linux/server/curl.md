# curl

client url

https://curl.se/

## 命令

```bash
# 服务器返回内容命令行输出
curl https://www.baidu.com

# 返回内容保存到文件中
curl -o baidu.html https://www.baidu.com

# 显示 http 响应头头部信息
curl -i https://www.baidu.com # 响应头 + 内容
curl -I https://www.baidu.com # 响应头

# 显示通信过程
curl -v https://www.baidu.com
```
