const CryptoJS = require('crypto-js');
const AES = CryptoJS.AES;
const { Hex } = CryptoJS.enc;


// 0001 0203 0405 0607 0809 0a0b 0c0d 0e0f
// 1. 生成私钥
const key = Hex.parse('000102030405060708090a0b0c0d0e0f');

// 2. 设置 iv
const iv = Hex.parse('101112131415161718191a1b1c1d1e1f');

// 3. 设置 block mode
const mode = CryptoJS.mode.CBC;

// 4. 设置 padding
const padding = CryptoJS.pad.Pkcs7;

// 5. 设置 salt

const ciperObj = AES.encrypt('nilinli', key, {
  iv,
  mode,
  padding,
});

console.log(ciperObj.ciphertext.toString(CryptoJS.enc.Base64));

const plainText = AES.decrypt(ciperObj, key, {
  iv,
  mode,
  padding,
});

console.log(plainText.toString(CryptoJS.enc.Utf8));

const plainText2 = AES.decrypt('tHG6Rw7ygh5OU076Kg+nnA==', key, {
  iv,
  mode,
  padding,
});

console.log(plainText2.toString(CryptoJS.enc.Utf8));

// Node
const  crypto = require('crypto');

// key utf8
// iv  utf8
const cipher = crypto.createCipheriv('aes-192-cbc', Hex.stringify(key), Hex.stringify(iv));
cipher.setAutoPadding(true);
const text = cipher.update('nilinli', 'utf8').final('base64')

console.log(text);