const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

// iconv C++ lib
// iconv-lite Pure js lib

function resolvePath(url) {
  return path.resolve(__dirname, url);
}

fs.readFile(resolvePath('./nixixi_gbk.txt'), (err, data) => {
  if (err) return;

  console.log(iconv.decode(data, 'gbk'));

  console.log(data.toString('utf8'));
});
