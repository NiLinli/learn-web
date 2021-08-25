const { MD5, enc } = require('crypto-js');

console.log(MD5('a').toString(enc.Base64));

const crypto = require('crypto');
const md5 = crypto.createHash('hex');
console.log(md5.update('a').digest('hex'));
