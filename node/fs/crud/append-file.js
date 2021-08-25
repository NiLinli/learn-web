const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, './test.txt');

fs.appendFile(file, '追加的数据', 'utf8', (err) => {
  if (err) throw err;
});
