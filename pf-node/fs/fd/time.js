const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, './fd.js');

let times = {};

recordTime(times, fs.statSync(file));

// 打开文件
const fd = fs.openSync(file, 'r');
console.log('open: ', getTimeChangeStatus(times, fs.fstatSync(fd)));

// 关闭文件
fs.closeSync(fd);
console.log('close: ', getTimeChangeStatus(times, fs.statSync(file)));

// 读取文件
fs.readFileSync(file);
getTimeChangeStatus(times, fs.statSync(file));
console.log('read: ', getTimeChangeStatus(times, fs.statSync(file)));

// 修改文件
fs.appendFileSync(file, '\n');
console.log('modify: ', getTimeChangeStatus(times, fs.statSync(file)));

// 修改权限
fs.chmodSync(file, 0o444)
console.log('only change inode: ', getTimeChangeStatus(times, fs.statSync(file)));

fs.chmodSync(file, 0o777);

function recordTime(times, stat) {
  times.atime = stat.atime;
  times.mtime = stat.mtime;
  times.ctime = stat.ctime;
}

function getTimeChangeStatus(times, stat) {
  let changeArr = [];
  for (const k in times) {
    if (Object.hasOwnProperty.call(times, k)) {
      if (times[k].valueOf() != stat[k].valueOf()) {
        changeArr.push(k);
      }
    }
  }

  // 更新 times
  recordTime(times, stat);

  return changeArr.join(', ');
}
