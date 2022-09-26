const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, './test.txt');

// 覆盖文件的方式写入
fs.writeFile(file, 'hello world', (err) => {
  if (err) throw err;

  console.log('File saved');
});
