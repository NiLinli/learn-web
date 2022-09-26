const fs = require('fs');

const rs = fs.createReadStream('data.txt', {
  highWaterMark: 2,
});

// 数据每读取一小块, 就会触发事件
rs.on('data', (chunk) => {
  console.log('data event');
  console.log(`Received ${chunk.length} bytes of data.`);
});
