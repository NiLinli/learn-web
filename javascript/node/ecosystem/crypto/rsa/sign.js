const { createSign, createVerify, sh } = require('crypto');
const fs = require('fs');
const path = require('path');

// const privKeyPath = path.resolve(__dirname, './pem/rsa_1024_priv_8.pem');
const privKeyPath = path.resolve(__dirname, './pem/rsa_1024_priv.pem');
const pubKeyPath = path.resolve(__dirname, './pem/rsa_1024_pub.pem');

const privKey = fs.readFileSync(privKeyPath);
const pubKey = fs.readFileSync(pubKeyPath);

const originText = `orderId=127&Authorization=ff9b5d2b9dc1441dae51ce157c3dddc8&method-timestamp=1619516325437`;

// Node
const sign = createSign('SHA256');
sign.update(originText);
sign.end();

const signature = sign.sign(privKey, 'base64');

console.log(signature);

// verify
const verify = createVerify('SHA256');

verify.update(originText);
verify.end();

const result = verify.verify(pubKey, signature, 'base64');

console.log(`Verified ${result ? 'OK' : 'FAILED'}\n`);

// jsrsasign
const rs = require('jsrsasign');
const rsu = require('jsrsasign-util');

const prvPEM = rsu.readFile(privKeyPath);
// prv 是一个 RSAKey Object
const prv = rs.KEYUTIL.getKey(prvPEM);

const sign2 = new rs.KJUR.crypto.Signature({ alg: 'SHA256withRSA' });
sign2.init(prv);
sign2.updateString(originText);
const sigHex = sign2.sign();
const signature2 = rs.hex2b64(sigHex);
console.log(signature2, '\n');

// jsencrypt 签名有概率是错的 fuck
const { JSEncrypt } = require('jsencrypt');
const CryptoJS = require('crypto-js');

const sign3 = new JSEncrypt();
sign3.setPrivateKey(privKey.toString('utf-8'));

console.log(sign3.sign(originText, CryptoJS.SHA256, 'sha256'));
// const signature3 = sign3.sign(originText, , 'sha256');
// console.log(signature3);
