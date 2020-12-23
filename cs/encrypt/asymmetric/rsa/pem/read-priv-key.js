const fs = require('fs');

const pub1 =
  '-----BEGIN PUBLIC KEY-----' +
  '\n' +
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCW3jYllZQhVOx0Cjonl3Kg1Rlm' +
  '\n' +
  'x/MpwhZ1znBFYZ0yTpnWo9bB/cH9qBVJInoNGHOlhT9l2e0IsXKs5ZSmhGSsFXyh' +
  '\n' +
  'd55trn+UQCchC2Z623DXJXm3g7rcZKB9qkSJNy3nP/fSi/aAto/eqys+BstCymEf' +
  '\n' +
  'eUdlO6idWJ9RZPrsQwIDAQAB' +
  '\n' +
  '-----END PUBLIC KEY-----' +
  '\n';

const pub2 = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCW3jYllZQhVOx0Cjonl3Kg1Rlm
x/MpwhZ1znBFYZ0yTpnWo9bB/cH9qBVJInoNGHOlhT9l2e0IsXKs5ZSmhGSsFXyh
d55trn+UQCchC2Z623DXJXm3g7rcZKB9qkSJNy3nP/fSi/aAto/eqys+BstCymEf
eUdlO6idWJ9RZPrsQwIDAQAB
-----END PUBLIC KEY-----
`;

fs.readFile('./rsa_1024_pub.pem', (err, data) => {
  if (err) return;

  console.log(data.toString() === pub1);
  console.log(data.toString() === pub2);
});
