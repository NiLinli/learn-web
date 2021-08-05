var fs = require('fs');
const path = require('path');

// require 根据 __dirname 进行计算文件路径
// but 其他位置只要传路径的都是根据 process.cwd() 计算路径
const config = require('./files/config.json');
console.log(config);

// /node/files/config.json
// 等同于
console.log(path.resolve('./files/config.json'));
console.log(path.resolve(process.cwd(), './files/config.json'));

const fileConfig = fs.readFileSync('./files/config.json', {
  encoding: 'utf-8',
});
console.log(fileConfig);

// node/require/  执行 node index.js
// node/          执行 node ./require/index.js
