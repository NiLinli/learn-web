const fs = require('fs');

function showHex(path) {
  console.log(path, fs.readFileSync(path));
}

showHex('./utf-8.txt');
showHex('./utf-8-bom.txt');
showHex('./utf-16-le.txt');
showHex('./utf-16-be.txt');
