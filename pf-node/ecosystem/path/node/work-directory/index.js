var fs = require('fs');
const path = require('path');

function resolvePath(dir) {
  return path.resolve(__dirname, dir);
}

// 两种方案
// 1
// const filePath = resolvePath('./files/config.json');

// 2 使用 require 的方式
// 不引入模块
// 只是 resolve 模块的 path
const filePath = require.resolve('./files/config.json');

const fileConfig = fs.readFileSync(filePath, {
  encoding: 'utf-8',
});

console.log(fileConfig);

// node/work-directory/  执行 node index.js
// node/          执行 node ./work-directory/index.js
