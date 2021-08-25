const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const WebSocket = require('./ws/index');

// 加载静态文件
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

// 构造 websocket 服务器
// Upgrade 请求处理
server.on('upgrade', function (req, socket, upgradeHead) {
  // 初始化 ws
  var wx = new WebSocket(req, socket, upgradeHead)

});

server.listen(8989, () => {
  console.log('listening on *:8989');
});
