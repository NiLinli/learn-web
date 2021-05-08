const crypto = require('crypto');

// 服务器根据客户端请求头 sec-websocket-key
// 按照 RF6455 计算出响应头 Sec-WebSocket-Accept
// 客户端就知道服务器是理解 WebSocket RF6455 协议的, 可以进行通信
function getSecWebSocketAccept(secWebsocketKey) {
  // RF6455规范 规定后缀
  const KEY_SUFFIX = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
  // RF6455规范 定义算法 sha1 base64 输出
  return crypto.createHash('sha1').update(`${secWebsocketKey}${KEY_SUFFIX}`).digest('base64');

}

module.exports = getSecWebSocketAccept;
