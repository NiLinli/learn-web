# fe demo

前端部署 一台主机端口模拟

- load-balance 负载均衡服务器
  - 7080
  - 7443
- web      单个虚拟主机
  - 9001
  - 9002
- web-port 多个虚拟主机
  - 800x
  - 801x
- h5-port 移动端页面
  - 803x
  - 804x

## 前端操作

- 图片处理 现在一般用云存储去处理
- 修改页面内容 添加 css 或者 js 文件, 比如测试环境添加 `vconsole.js`
- 合并 js 请求
- 区分 h5 和 pc

## docker

nginx 中的access.log error.log 被设置额为输出到 stdout stderr