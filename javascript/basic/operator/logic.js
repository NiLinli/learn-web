const a = 3;
const b = 0;
const c = 'nixixi';

console.log(`b || c = ${b || c}`); // 返回 C 的值
console.log(`a && c = ${a && c}`); // 返回 C 的值

// 短路运算
console.log(`a || b++ = ${a || b++}`);
console.log(`b && (c+'12') = ${b && (c+'12')}`);

console.log(`b = ${b}`)
console.log(`c = ${c}`);

// 返回值
// 1. 没有被转换为 1 0 , 是运算符两边表达式的值
// 2. 最后一次运算的值 (不短路为右边的值, 短路为左边的值)

// ! -> 转换为 boolean 类型
console.log(`!a = ${!a}`);


// && 应用
let obj = {};

// 安全获取 obj.name 的值
const temp = obj && obj.name;

// if 单个语句
const str1 = 'n';
const str2 = 'n';

function sayN() {
    console.log('NNNNNNNNNNnnnnnNNNN');
}

if (str1 === str2) {
    sayN();
}

// 等效于
(str1 == str2) && sayN();


// || 应用
function foo(name) {
    const name = name || 'nixixi';   // 参数初始值
}




// false -> falsey (adj) -> 简写 falsy

// false 
// null
// undefined
// 0 
// NaN
// ''
// (!!document.all) ie 为 true 其他为 false