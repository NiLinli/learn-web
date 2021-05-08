const EventEmitter = require('events');
const crypto = require('crypto');
const getSPHeaders = require('./getSPHeaders');

class Websocket extends EventEmitter {
  constructor(req, socket, upgradeHead) {
    super();

    // 升级协议
    socket.write(getSPHeaders(req));

    
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


module.exports = Websocket;
