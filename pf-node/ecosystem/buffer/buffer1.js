const b = new Buffer(10000);

const str = '我叫倪西西';

b.write(str);

console.log(b.length);                  // 10000 不会跟踪数据
console.log(Buffer.byteLength(str));    // 15 占 Buffer 中 15 个 length



const b1 = new Buffer('My name is '),
    b2 = new Buffer('nixixi');


const b3 = Buffer.concat([b1, b2]);     // concat buffer

console.log(b3.toString('utf-8'));


