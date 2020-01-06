#!/usr/bin/env node

// #! 类 Unix 系统中直接运行, 不必用 node 命令启动

const fs = require('fs');

// fs.createReadStream(process.argv[2]).pipe(process.stdout);

// 监听文件流的 data 事件
fs.createReadStream(process.argv[2])
  .on('data', chunk => process.stdout.write(chunk))   // on 返回的是 emitter 对象, 可以用来链式处理
  .on('error', err => process.stderr.write(`Error: ${err.message}`))

