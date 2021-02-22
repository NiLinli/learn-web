const fs = require('fs');

const ws = fs.createWriteStream('./test.txt');

// 当流或其底层资源（比如文件描述符）被关闭时触发
ws.on('close', () => {
  console.log('close');
});

// 写入或管道数据时发生错误
ws.on('error', () => {
  console.log('error');
});

// 缓冲数据都已传给底层系统之后触发
ws.on('finish', () => {
  console.log('finish');
});

// 写入的时候， 需要考虑 back pressure 背压
// 缓冲区如果满了， 则不能继续写入
// 缓存区满了之后清空 drain 后, 则应该重新写入
function writeOneMillionTimes(writer, data, encoding, callback) {
  function write() {
    let ok = true; // 可以继续写入
    do {
      i--;
      if (i === 0) {
        // 写入完成
        writer.end(data, encoding, callback);
      } else {
        // 每次写入后都应该判断是否可以继续写入, 内部可写缓冲小于 highWaterMark 设置的阀值，就返回 true
        ok = writer.write(data, encoding, callback);
      }
    } while (i > 0 && ok);

    if (i > 0) {
      writer.once('drain', write);
    }
  }

  let i = 1000000;

  write();
}

function writeOneMillionTimesError(writer, data, encoding, callback) {
  function write() {
    do {
      i--;
      if (i === 0) {
        // 写入完成
        writer.end(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding, callback);
      }
    } while (i > 0);
  }

  let i = 1000000;

  write();
}

// writeOneMillionTimes(ws, Math.random() + '', 'utf8', null);
writeOneMillionTimesError(ws, Math.random() + '', 'utf8', null);
