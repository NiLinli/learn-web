const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, './test.txt');

fs.unlink(file, (err) => {
  if (err) throw err;

  console.log('File delete!!!');
});
