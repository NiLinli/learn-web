const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

if (!filename) {
  throw Error('A file to watch must be specified!');
}

// 直接传送
// fs.watch(filename, () => {
//   const ls = spawn('ls', ['-l', '-h', filename]);   // 返回 ChildProcess
//   ls.stdout.pipe(process.stdout)
// });


fs.watch(filename, () => {
  const ls = spawn('ls', ['-l', '-h', filename]);   // 返回 ChildProcess
  
  let output = '';
  
  // chunk 是 Buffer (node 中表示二进制形式)
  // Buffer + String 等同于 buffer.toString('utf8') + string
  // 把二进制数据复制到 Node 中的操作非常耗时 最好是直接操作 Buffer
  ls.stdout.on('data', chunk =>  output += chunk);
  ls.on('close', ()=> {
    const parts = output.split(/\s+/);
    console.log([parts[0], parts[4], parts[8]]);
  })
});

console.log(`Now watching ${filename} for changes...`);