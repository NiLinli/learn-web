// > < >= <=
// 正常下应该是比较数字
// js 中 string 也可以比较 类比 - 号

let a = 41;
let b = '40';
let c = '43';

// string
console.log(b < c);

// string 与 number 进行比较, string 隐式转化为 number 
// 41 < 40
console.log(a < b);

let d = 'foo';
// Number('foo') 为 NaN
console.log(a < d); //  false
console.log(a > d); //  false