// 1. from
// - string, encoding

console.log(Buffer.from('倪西西')); // 默认 encodeing 为 utf8
console.log(Buffer.from('倪西西', 'utf16le'));

const fs = require('fs');

fs.readFile('./nixixi_utf-8.txt', (err, data) => {
  console.log(data);
});

// utf16le 文件和 字符串转换成内存 string 转成的 Buffer 不一致
// 需要处理 BOM
fs.readFile('./nixixi_utf-16le.txt', (err, data) => {
  console.log(data);
});
