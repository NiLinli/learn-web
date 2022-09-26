
const BigNumber = require('bignumber.js');

// ieee754
// 最大正值
// 最小正值
console.log(Number.MAX_VALUE, Number.MIN_VALUE);

// ieee754 规定安全整数范围(小数都不安全 0.0)
const MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
const unsafeInteger = Math.pow(2, 54);
const unsafeInteger2 = 99999999999999999999;
const unsafeInteger2String = '99999999999999999999';

console.log(MAX_SAFE_INTEGER === Number.MAX_SAFE_INTEGER);

console.log(MAX_SAFE_INTEGER + 1); // 9007199254740992
console.log(MAX_SAFE_INTEGER + 2); // 9007199254740992 丢失了精度 正确显示 => 9007199254740993
console.log(MAX_SAFE_INTEGER + 3); // 9007199254740994
console.log(String(MAX_SAFE_INTEGER).length);

// BigNumber
const bn = BigNumber(MAX_SAFE_INTEGER);
console.log(bn.plus(2).toString());

const bn1 = BigNumber(unsafeInteger);
console.log(bn1.toString());

const bn2 = BigNumber(unsafeInteger2);
console.log(bn2.toString());

const bn2String = BigNumber(unsafeInteger2String);
console.log(bn2String.toString())


// BigInt
let bi = BigInt(MAX_SAFE_INTEGER);
bi = bi + 2n;
console.log(bi, bi.toString());

const bi1 = BigInt(unsafeInteger);
console.log(bi1);

const bi2 = BigInt(unsafeInteger2);
console.log(unsafeInteger2.toString());
console.log(bi2);

const bi2String = BigInt(unsafeInteger2String);
console.log(bi2String);

// bigInt 文本必须是整数
// const c = 0.1n;




