const fs = require('fs');
const { StringDecoder } = require('string_decoder');

const rs = fs.createReadStream('./test.txt', {
  highWaterMark: 11,
});

// 底层调用了 StringDecoder
// rs.setEncoding('utf8');

let data = '';
// rs.on('data', (chunk) => {
//   data += chunk;
// });
// rs.on('end', () => {
//   console.log(data);
// });

// rs.setEncoding('utf8') 等同于
// const decoder = new StringDecoder('utf8');
// rs.on('data', (chunk) => {
//   data += decoder.write(chunk);
// });

// rs.on('end', () => {
//   data += decoder.end();
//   console.log(data);
// });

let bufArr = [];
let size = 0;
rs.on('data', (chunk) => {
  bufArr.push(chunk);
  size += chunk.length;
});

rs.on('end', () => {
  const buf = Buffer.concat(bufArr, size);
  const data = buf.toString('utf-8');

  console.log(data);
});

// rs.on('open', () => {
//     console.log('open');
// });

// rs.on('readable', () => {
//     console.log('readable');
//     console.log(rs.read())
//     console.log(rs.bytesRead);
// });

// rs.on('end', () => {
//     console.log('end');
// });

// rs.on('close', () => {
//     console.log('close');
// });
