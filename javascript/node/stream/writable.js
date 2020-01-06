const fs = require('fs');

const ws = fs.createWriteStream('data.txt');


ws.on('close', () => {
  console.log('close');
});

ws.on('error', () => {
  console.log('error');
});

ws.on('finish', () => {
  console.log('finish');
});

ws.write('beep1 ');
ws.write('boop \n', () => {
  console.log('boop 已经被写入'); // 写入完成执行回调
});
ws.end(null);