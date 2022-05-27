const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, './test.txt');

fs.truncate(file, 2, (err) => {
  if (err) throw err;
});