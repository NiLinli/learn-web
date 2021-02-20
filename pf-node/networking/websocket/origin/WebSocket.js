const EventEmitter = require('events');
const crypto = require('crypto');

class Websocket extends EventEmitter {
  constructor(req, socket, upgradeHead) {
    super();

    // 1. 构造响应头 resHeaders 部分
    const resKey = getSecWebSocketAccept(req.headers['sec-websocket-key']);

    // 构造响应头
    const resHeaders = ['HTTP/1.1 101 Switching Protocols', 'Upgrade: websocket', 'Connection: Upgrade', 'Sec-WebSocket-Accept: ' + resKey].concat('', '').join('\r\n');
    socket.write(resHeaders);

    // 2. 监听 socket 的 data 事件, 以及 error 事件
    socket.on('data', (data) => {
      // this.buffer = Buffer.concat([this.buffer, data]);
      // while (this._processBuffer()) {} // 循环处理返回的 data 数据
    });

    socket.on('close', (had_error) => {
      // if (!this.closed) {
      //   this.emit('close', 1006);
      //   this.closed = true;
      // }
    });

    // 3. 初始化成员属性
  }
}

function getSecWebSocketAccept(secWebsocketKey) {
  return crypto.createHash('sha1').update(`${secWebsocketKey}258EAFA5-E914-47DA-95CA-C5AB0DC85B11`).digest('base64');
}

module.exports = Websocket;
