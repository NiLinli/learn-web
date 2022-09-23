const { Console } = require('console');
const fs = require('fs');

// 标准 log
const console2 = new Console({
  stdout: process.stdout,
  stderr: process.stderr
});


// stdout
console.log('你好世界');
console2.log('你好世界');

// stderr: [Error: 错误信息]
console.error(new Error('错误信息'));
console2.error(new Error('错误信息'));

// stderr: 警告描述
const name = '描述';
console.warn(`警告${name}`);
console2.warn(`警告${name}`);


const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// 自定义的简单记录器。
const logger = new Console({ stdout: output, stderr: errorOutput });
// 像控制台一样使用它。
const count = 5;
logger.log('count: %d', count);