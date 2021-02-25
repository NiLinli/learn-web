const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, './test.txt');

// w 模式会截断
// fs.open(file, 'w', (err, fd) => {
//   if (err) throw err;

//   const writeIntoBuffer = Buffer.from('hello world', 'utf-8');

//   // position 前面填充 0o000
//   fs.write(fd, writeIntoBuffer, 0, writeIntoBuffer.byteLength, 2, (err, bytesWritten, buffer) => {
//     if (err) throw err;

//     console.log('File Saved');
//   });
// });

// r+ 模式为修改
fs.open(file, 'r+', (err, fd) => {
  if (err) throw err;

  const writeIntoBuffer = Buffer.from('hello world111', 'utf-8');

  // position 前面填充 0o000
  fs.write(fd, writeIntoBuffer, 0, writeIntoBuffer.byteLength, 2, (err, bytesWritten, buffer) => {
    if (err) throw err;

    console.log('File Saved');
  });
});
