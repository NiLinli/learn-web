const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, './fd.js');

let times = {};

recordTime(times, fs.statSync(file));

const fd = fs.openSync(file, 'r');

// atime 改变
getTimeChangeStatus(times, fs.fstatSync(fd));

fs.close(fd, () => {
  getTimeChangeStatus(times, fs.fstatSync(fd));
});

function recordTime(times, stat) {
  times.atime = stat.atime;
  times.mtime = stat.mtime;
  times.ctime = stat.ctime;
}

function getTimeChangeStatus(times, stat) {
  let changeArr = [];
  for (const k in times) {
    if (Object.hasOwnProperty.call(times, k)) {
      if (times[k] !== stat[k]) {
        changeArr.push(k);
      }
    }
  }

  // 更新 times
  recordTime(times, stat);

  return changeArr.join(', ');
}
