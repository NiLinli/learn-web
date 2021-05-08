

const getSecWebSocketAccept = require('./getSecWebSocketAccept');

module.exports = function getSPHeaders(req) {
  // 构造 http 响应
  const resHeaders = [
    // 起始行
    'HTTP/1.1 101 Switching Protocols',
    // 头部
    'Upgrade: websocket',
    'Connection: Upgrade',
    `Sec-WebSocket-Accept: ${getSecWebSocketAccept(req.headers['sec-websocket-key'])}`,
  ].join('\r\n');

  return resHeaders;
};
