// new
// 初始值为 0
const buf = new ArrayBuffer(16);      // 参数为字节数

console.log(buf);
console.log(buf.byteLength);      // 字节长度

// view
const x1 = new Int32Array(buf);     // 一个单位是 32 位 , 4 个字节
console.log(x1);

const x2 = new Uint8Array(buf);     // 一个单位是 8 位, 1 个字节
console.log(x2);

x2[9] = 4;

console.log(x1);
console.log(x2);

// slice
const buf2 = buf.slice(6, 10);
const x3 = new Uint8Array(buf2);
console.log(x3);

console.log(ArrayBuffer.isView(buf2));      // false
console.log(ArrayBuffer.isView(x3));        // true

