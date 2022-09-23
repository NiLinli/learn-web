// 最原始的读取方式
const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '../fs.md');

// 模拟 fs.readFile
fs.open(file, 'r', (err, fd) => {
  if (err) return err;

  fs.fstat(fd, (err, stats) => {
    if (err) return err;

    // 创建一个和内容相同大小的 buffer

    const targetBuffer = Buffer.alloc(stats.size, 0);

    fs.read(fd, targetBuffer, 0, stats.size, 0, (err, bytesRead, buffer) => {

      console.log(targetBuffer === buffer)
      console.log(buffer.toString('utf-8'))

    });
  });
});
