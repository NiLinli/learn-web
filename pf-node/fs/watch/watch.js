const fs = require('fs');
const crypto = require('crypto');

// fs.FSWatcher

let previousMTime = new Date(0);
let previousMD5 = null;
const fsWatcher = fs.watch(
  './',
  {
    encoding: 'utf-8', // 文件名编码
    recursive: false, // 监听子目录文件
  },
  // debounce 回调函数
  (eventType, filename) => {
    if (filename) {
      const mtime = fs.statSync(filename).mtime;
      const cMD5 = crypto.createHash('md5').update(fs.readFileSync(filename)).digest('hex');
      // 文件 1 修改时间  2. hash 值
      if (mtime.valueOf() !== previousMTime.valueOf() && cMD5 !== previousMD5) {
        // 一次文件修改响应多次
        console.log(`eventType : ` + eventType + ' ' + cMD5);
        console.log(filename);
        previousTime = mtime;
        previousMD5 = cMD5;
      }
    }
  }
);

setTimeout(() => {
  fsWatcher.close();
}, 1000 * 60 * 10);
