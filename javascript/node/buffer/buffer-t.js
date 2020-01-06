const str = '倪西西';

const buf = Buffer.from(str);

console.log(buf);

console.log(buf.toString('utf8'));

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));

// 截取一段进行转换输出
console.log(buf.toString('utf8', 3, 6));    // [start, end)