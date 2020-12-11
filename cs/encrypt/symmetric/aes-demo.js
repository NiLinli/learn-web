const AES = require('crypto-js/aes');
const CryptoJS = require('crypto-js');


// 0001 0203 0405 0607 0809 0a0b 0c0d 0e0f
// 1. 生成私钥
const key = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');

console.log(key.toString());

// 2. 设置 iv
const iv = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');
console.log(iv.toString());
// 3. 设置 block mode 
const mode = CryptoJS.mode.ECB; // default
// 4. 设置 padding
const padding = CryptoJS.pad.AnsiX923;
// 5. 设置 salt

var ciperText = AES.encrypt('nilinli', key, {
  iv,
  mode,
  padding
});

var obj = {
  ct: ciperText.toString(),
  iv: ciperText.iv.toString(),
  key: ciperText.key.toString()
}

console.log(obj)

var plainText = AES.decrypt(ciperText, key, {
  iv,
  mode,
  padding
});

console.log(plainText.toString(CryptoJS.enc.Utf8));


var plainText2 = AES.decrypt('tHG6Rw7ygh5OU076Kg+nnA==', key, {
  iv,
  mode,
  padding
});

console.log(plainText2.toString(CryptoJS.enc.Utf8));


// AES(Advanced Encryption Standard) - Rijndael加密法
// 对称加密 - 私钥的传递