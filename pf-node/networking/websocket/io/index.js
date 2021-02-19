const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const serve = http.createServer(app);
const socket_io = require('socket.io');
const io = socket_io(serve);


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'))
})

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('chat message', function (msg) {
    console.log('message: ' + msg);
    io.emit('chat message', msg + ' serve boardcast the same');
  });

  socket.on('disconnect', function () {
    console.log('user disconnected');
  })
});

serve.listen(8989, () => {
  console.log('listening on *:8989');
})