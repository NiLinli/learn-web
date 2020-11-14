const fs = require('fs');

// fs.StatWatcher
const statWatcher = fs.watchFile('./watch.js', {
  interval: 5007    // 通过轮询实现, 效率太低
}, (curr, prev) => {
  console.log(`当前的最近修改时间是: ${curr.mtime}`);
  console.log(`之前的最近修改时间是: ${prev.mtime}`);
});       
        