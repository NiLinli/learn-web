const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '../fs.md');

// read 整个文件到一个 相同的 buffer 中
fs.readFile(file, (err, data) => {
  if (err) throw err;
  console.log(data.toString('utf-8'));
})