const buf1 = Buffer.alloc(10, 3);
console.log(buf1)
console.log(typeof buf1); // object - Buffer - UInt8Array - number[]
console.log(typeof buf1[1]); // number