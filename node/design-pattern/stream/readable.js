const fs = require('fs');

const rs = fs.createReadStream('data.txt', {
  highWaterMark: 2,
});

// 事件表明流有了新的动态
// 1. 要么是有了新的数据
// 2. 要么是到了流的尾部
rs.on('readable', () => {
  console.log('readable event');
  let chunk;

  // rs.read() 调用
  // 1. 先从 缓存区取数据
  // 2. 缓存区如果数据不够了, 调用 _read() 去底层去取, 取得数据会调用 push() 方法推进缓存区
  // 3. push() 方法有可能是 async, 所以取回来的 有可能为 null
  while (null !== (chunk = rs.read())) {
    console.log(`Received ${chunk.length} bytes of data.`);
  }
});
