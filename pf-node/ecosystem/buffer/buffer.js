// @deprecated
// const b = new Buffer(10000);

const buf1 = Buffer.alloc(100, 3); // 默认填充 0
console.log(typeof buf1); // object - Buffer - UInt8Array - number[]
console.log(typeof buf1[1]); // number

// allocUnsafe 比较快 但是里面都是随机数 需要使用 fill 填充
const buf2 = Buffer.allocUnsafe(10);
console.log(buf2);
buf2.fill(2);
console.log(buf2);

// 写入: 将 JS 内存中的变量写入到 Buffer 中, 都需要告知以哪种类型写入到 Buffer 中
// 支持字符串写入
// 支持数字写入

const str = '我叫倪西西';
console.log(Buffer.byteLength(str)); // 计算字符串所占的空间

buf1.write('我叫倪西西', 8); // offset length encoding
console.log(buf1);
console.log(buf1.length); // 10000 不会跟踪数据

console.log(isBuffer(buf1))

function isBuffer(obj) {
  // if (Buffer.isBuffer) return Buffer.isBuffer(obj);

  return typeof obj === 'object' && obj instanceof Buffer;
}
