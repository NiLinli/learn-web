// alloc

const buf3 = Buffer.alloc(10); // 默认填充 0
const buf4 = Buffer.alloc(10, 100);
console.log(buf3);
console.log(buf4);

// allocUnsafe 比较快 但是里面都是随机数 需要使用 fill 填充
const buf5 = Buffer.allocUnsafe(10);
const buf6 = Buffer.allocUnsafe(10);
buf6.fill(2);
console.log(buf5);
console.log(buf6);
 