var fs = require('fs');
const path = require('path');

function resolvePath(dir) {
  return path.resolve(__dirname, dir);
}

// 两种方案
// 1 path
// 不存在的模块也可以计算出路径
// const filePath = resolvePath('./files/config.json');

// 2 require
// 不引入模块, 只是 resolve 模块的 path
// **不存在的模块无法 resolve**
const filePath = require.resolve('./files/config.json');

const fileConfig = fs.readFileSync(filePath, {
  encoding: 'utf-8',
});

console.log(fileConfig);

// node/work-directory/  执行 node index.js
// node/          执行 node ./work-directory/index.js
