const net = require('net');

// (socket) => {} 绑定在 server.on('connection') 上
// const server = net.createServer((socket) => {});

// 等同于
const server = net.createServer();

server.on('connection', (socket) => {
  // 获取数据
  socket.on('data', (data) => {

    // data 是 Buffer 类型的
    console.log(data);
    console.log(data.toString('utf8'));
    socket.write('服务端收到信息了\n');
  });

  // 
  socket.on('end', () => {
    console.log('断开连接');
  });


  socket.write(' world');
});

// 监听端口
server.listen(8124, () => {
  console.log('server bound');
});