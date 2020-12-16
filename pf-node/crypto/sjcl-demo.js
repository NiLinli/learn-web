var sjcl = require('sjcl');

const encryptData = sjcl.encrypt('nilinli', 'nilinli is a batman');
console.log(encryptData);

console.log(sjcl.decrypt('nilinli', encryptData));