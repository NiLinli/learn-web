// resolve 计算出绝对路径
// 1. 从右向左合
// 2. 合并出绝对路径就停止
// 3. 如果合并到最左边都合并不出绝对路径, 就 添加 __dirname 这个绝对路径去合并
const path = require('path');
const process = require('process');

console.log(
  path.resolve('/a', '/b',  './c') + '\n',
  path.resolve('/a', './b',  './c')  + '\n',
  path.resolve('./a', './b',  './c') + '\n',
  path.resolve('./a') + '\n',
  path.resolve(__dirname, './a')
);

console.log(process.cwd());


