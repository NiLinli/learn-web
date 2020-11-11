const { Console } = require('console');
const fs = require('fs');

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// 自定义的简单记录器。
const logger = new Console({ stdout: output, stderr: errorOutput });

// stderr
// 为 false 输出 Assertion failed: 打印内容
// 为 true 不输出任何东西

logger.assert(true, '什么都不做');
logger.assert(false, '%s 工作', '无法');     // Assertion failed: 无法工作
logger.assert();                            // Assertion failed