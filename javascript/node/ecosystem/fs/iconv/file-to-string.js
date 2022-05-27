const fs = require('fs');
const path = require('path');
const { removeUtf16Bom } = require('./utf16-bom');

function resolvePath(url) {
  return path.resolve(__dirname, url);
}

fs.readFile(resolvePath('./nixixi_utf-8.txt'), (err, data) => {
  console.log('utf-8', data);
});

fs.readFile(resolvePath('./nixixi_utf-16le.txt'), (err, data) => {
  console.log('utf-16le', data);
});

// 指定 encoding 类型, 也不处理 BOM, 需要自行处理
// 等同于
// 1. encoding 为 null, 接收到 Buffer
// 2. Buffer.toString(data, 'utf16le')

// fs.readFile(resolvePath('./nixixi_utf-16le.txt'), { encoding: 'utf16le' }, (err, data) => {
//   console.log('utf-16le', data === '倪西西');
// });

fs.readFile(resolvePath('./nixixi_utf-16le.txt'), (err, data) => {

  console.log('utf-16le', removeUtf16Bom(data).toString('utf16le') === '倪西西');
});
