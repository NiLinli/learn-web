const fs = require('fs');

const rs = fs.createReadStream('data.txt', {
  highWaterMark: 2
});

// 数据每读取一小块, 就会触发事件
rs.on('data', (chunk) => {
  console.log('data event');
  console.log(`Received ${chunk.length} bytes of data.`);
});

// 事件表明流有了新的动态
// 1. 要么是有了新的数据
// 2. 要么是到了流的尾部
rs.on('readable', () => {
  console.log('readable event');
  let chunk;
  while (null !== (chunk = rs.read())) {
    console.log(`Received ${chunk.length} bytes of data.`);
  }
});