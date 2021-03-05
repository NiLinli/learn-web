// begin index + end index

const str = '012345678';
console.log(`
  str.substring(3,3) = ${str.substring(3, 3)}
  str.substring(3,4) = ${str.substring(3, 4)}
  str.slice(3,3) = ${str.slice(3, 3)}
  str.slice(3,4) = ${str.slice(3, 4)}
`);

// slice 特异功能
// slice 支持负数 负数效果等为 负数 + length
console.log(`${str.slice(2, -1) === str.slice(2, str.length + -1)}`);
console.log(str.slice(2));
console.log(str.slice());

// substring 支持 begin 和 end 自动比较大小
console.log(`${str.substring(3, 1) === str.substring(1, 3)}`);
console.log(`${str.substring(3, -1) === str.substring(0, 3)}`);
console.log(`${str.substring(2)}`);
console.log(`${str.substring()}`);

