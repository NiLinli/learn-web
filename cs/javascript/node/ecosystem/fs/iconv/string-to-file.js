const fs = require('fs');
const path = require('path');
const { removeUtf16Bom, addUtf16Bom } = require('./utf16-bom');

function resolvePath(url) {
  return path.resolve(__dirname, url);
}

// 指定 encoding 类型, 也不处理 BOM, 需要自行处理
// 等同于
// 1. encoding 为 null, 接收到 Buffer
// 2. Buffer.toString(data, 'utf16le')

const filePath = resolvePath('./w_nixixi_utf-16le.txt');
const str = '倪西西';

// 写入文件也不处理 BOM
// fs.writeFileSync(filePath, str, { encoding: 'utf16le' });
// <Buffer ff fe 2a 50 7f 89 7f 89>
fs.writeFileSync(filePath, addUtf16Bom(Buffer.from(str, 'utf16le'), 'le'));

// console.log(fs.readFileSync(filePath, { encoding: 'utf16le' }) === str);
