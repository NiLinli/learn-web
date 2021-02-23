const str = '倪西西';

const buf = Buffer.from(str);

// 1. from
// - string, encoding

console.log(Buffer.from('倪西西')); // 默认 encodeing 为 utf8
console.log(Buffer.from('倪西西', 'utf16le'));

console.log(buf);

console.log(buf.toString('utf8'));

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));

// 截取一段进行转换输出
console.log(buf.toString('utf8', 3, 6)); // [start, end)
