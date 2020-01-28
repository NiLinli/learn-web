// slice 和 substring 都是取下标
// 返回一个新的字符串
let str = '012345678';
console.log(`
  str.substring(3,3) = ${str.substring(3,3)}
  str.substring(3,4) = ${str.substring(3,4)}
  str.slice(3,3) = ${str.slice(3,3)}
  str.slice(3,4) = ${str.slice(3,4)}
`);


// 不同点
// substring 两个 index 会判断大小, 小的为起始位置
// substring 负数当作 0
// slice 负数等效于 负数 + length
console.log(`
  str.substring(3,1) = ${str.substring(3,1)}
  str.slice(3,1) = ${str.slice(3,1)}

  str.substring(2, -1) = ${str.substring(2, -1)}
  str.slice(2, -1) = ${str.slice(2,-1)}
`)