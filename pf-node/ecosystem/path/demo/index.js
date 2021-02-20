var fs = require('fs');
const path = require('path');

console.log(require('./files/config.json'));

console.log(path.resolve('./files/config.json'));
console.log(path.resolve(__dirname,'./files/config.json'));

// console.log(fs.readFileSync('./files/config.json', 'utf8'));
console.log(fs.readFileSync(path.resolve(__dirname, './files/config.json'), 'utf8'));



