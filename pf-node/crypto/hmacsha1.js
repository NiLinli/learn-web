const CryptoJS = require('crypto-js');

const key = 'abc';
const message = 'nixixi';

console.log(CryptoJS.HmacSHA1(message, key).toString(CryptoJS.enc.Base64));


const { createHmac } = require('crypto');

const hmacSha1 = createHmac('sha1', key);

console.log(hmacSha1.update(message).digest('base64'));
