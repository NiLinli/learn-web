const path = require('path');
const debug = { hello: 'world' };


const buf = Buffer.from(JSON.stringify(debug, null, 2));


// <Buffer 7b 0a 20 20 22 68 65 6c 6c 6f 22 3a 20 22 77 6f 72 6c 64 22 0a 7d>
console.log(buf);
// 22
console.log(Buffer.byteLength(buf))
