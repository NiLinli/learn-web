// v6.0 之后废弃了 new

// 1. from
// - string, encoding
// - array
// - buf
// - arrayBuffer




const buf1 = Buffer.from([1, 2, 3]);
console.log(buf1);

const buf2 = Buffer.from('倪西西');
console.log(buf2);
console.log(buf2[2]);   // 取值出来为十进制

// 2. alloc
const buf3 = Buffer.alloc(10);    // 默认填充 0
const buf4 = Buffer.alloc(10,100);
console.log(buf3);
console.log(buf4);

// 3. allocUnsafe 比较快 但是里面都是随机数 需要使用 fill 填充
const buf5 = Buffer.allocUnsafe(10);
const buf6 = Buffer.allocUnsafe(10);
buf6.fill(2);
console.log(buf5);
console.log(buf6);
