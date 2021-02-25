const fs = require('fs');
const { StringDecoder } = require('string_decoder');
const path = require('path');

const file = path.resolve(__dirname, '../fs.md');

const rs = fs.createReadStream(file, {
  highWaterMark: 11,
});

// 底层调用了 StringDecoder
// rs.setEncoding('utf8');

let data = '';
rs.on('data', (chunk) => {
  data += chunk;
});
rs.on('end', () => {
  console.log(data);
});

// rs.setEncoding('utf8') 等同于
// const decoder = new StringDecoder('utf8');
// rs.on('data', (chunk) => {
//   data += decoder.write(chunk);
// });

// rs.on('end', () => {
//   data += decoder.end();
//   console.log(data);
// });

// 拼接成整个 buffer 之后一起转码
// let bufArr = [];
// let size = 0;
// rs.on('data', (chunk) => {
//   bufArr.push(chunk);
//   size += chunk.length;
// });

// rs.on('end', () => {
//   const buf = Buffer.concat(bufArr, size);
//   const data = buf.toString('utf-8');

//   console.log(data);
// });
