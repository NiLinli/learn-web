const path = require('path');
const fs = require('fs');

const file = path.resolve(__dirname, './a.txt');

fs.access(file, (err) => {
  if (err) return;

  // 正常操作
});

fs.access(file, fs.constants.W_OK, (err) => {
  // err 存在即判断没有检查的该项权限
  if (err) {
    console.log(`${file} 不可 write`);
    return;
  }

  // 正常操作
});
