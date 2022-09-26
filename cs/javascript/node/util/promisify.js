const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);

// (err, value) => ...
// 错误优先的回调 promise 化
// 不满足上诉形式的可以使用 util.promisify.custom 重写

stat('.')
  .then((stats) => {
    console.log(stats);
  })
  .catch((error) => {
    console.log(error);
  });

