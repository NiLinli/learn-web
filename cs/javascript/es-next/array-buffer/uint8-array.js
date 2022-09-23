// TypeArray 中用的最多的类型
// UInt8Array

// 跳过 ArrayBuffer 直接生成 view
const uint8a = new Uint8Array(4);
uint8a[0] = 1;
uint8a[1] = 88;
uint8a[2] = 28;
uint8a[3] = 267;    // 11 溢出了

console.log(uint8a);
console.log(uint8a.toString());   // 没有实现 utf8 base64 hex 等的转换

console.log(uint8a.buffer);