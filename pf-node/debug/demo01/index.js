const http = require('http');

http.createServer(function (req, res) {
  const a = req.method;
  const b = req.url;
}).listen(3002);

// https://nodejs.org/zh-cn/docs/guides/debugging-getting-started/
// 当启动
// Node.js 进程通过网络套接字监听
// --inspect 启动
// 127.0.0.1:9229
// 每个进程也被分配一个独特的 UUID (e.g. 0f2c936f-b1cd-4ac9-aab3-f63b0f33d55e)

// 安全性
// 调试器对 Node.js 执行环境具有完全访问权限
// 1. 调试器端口不能暴露到公共网络中, 一般放在本地 127.0.0.1
// 2. 本地其他 application 有访问权限 cors

// chrome
// 1. node --inspect index.js
// 2. http://localhost:9229/json/list
// 3. devtoolsFrontendUrl