const fs = require('fs');

// fs.FSWatcher
const fsWatcher = fs.watch('./', { 
    encoding: 'utf-8',      // 文件名编码
    recursive: false        // 监听子目录文件
}, (eventType, filename) => {
    // 一次文件修改响应多次
    console.log(`eventType : ` + eventType);
    console.log(filename);
}); 


setTimeout(() => {
    fsWatcher.close(); 
}, 1000 * 60 * 10);