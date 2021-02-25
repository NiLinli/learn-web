const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, './test.txt');

const ws = fs.createWriteStream(file, {
  flags: 'r+',
  start: 3
});


ws.write('3')
ws.end();