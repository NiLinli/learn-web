const net = require('net');

// (socket) => {} 绑定在 server.on('connection') 上
// const server = net.createServer((socket) => {});

// 等同于
const server = net.createServer();

server.on('connection', (socket) => {
  // 获取数据
  socket.on('data', (data) => {
    console.log(data);
    socket.write('hello');
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