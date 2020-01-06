// 对象解构
let node = {
    type: 'identify',
    name: 'foo'
};

// 1 声明加解构
let {
    type,
    name,
    aaa,
    bbb = true    // 解构默认值
} = node;

console.log(type);      // 'identify'
console.log(name);      // 'foo'
console.log(aaa);       // undefined
console.log(bbb);       // true

// 2 赋值解构
const person = {
    fname: 'nixix',
    fage: 18
}

let fname, fage;
({ fname, fage } = person); // 必须要带括号
console.log(fname);         // 'nixixi'
console.log(fage);          // 18

