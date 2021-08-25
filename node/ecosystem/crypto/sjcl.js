const sjcl = require('sjcl');

const key = 'nilinli';
const content = 'nilinli is a batman';

const encryptData = sjcl.encrypt(key, content);

console.log(sjcl.decrypt(key, encryptData));