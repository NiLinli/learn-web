function foo() {}
let str = 'abc',
    num = 123,
    arr = [],
    obj = {},
    symbol = Symbol();

console.log(typeof num);  // 'number'
console.log(typeof str);  // 'string'
console.log(typeof true); // 'boolean'
console.log(typeof symbol); // 'symbol'

console.log('----strange null----');
let nullOmg = null;
console.log(typeof nullOmg);   // 'object' - bug
console.log((typeof nullOmg === 'object' && !nullOmg));
console.log(nullOmg === null);

console.log('---strange undefined-----');
let undefinedVar;
console.log(typeof undefinedVar);  // 'undefined' really undefined
console.log(typeof undeclaredVar);   // 'undefined' is not found, but...   safety guard
typeof

console.log('---strange object-----');
console.log(typeof foo); // 'function'
// instanceof 去判断
console.log(typeof arr); // object
console.log(typeof obj); // object


// 1. typeof 是值 value 的类型, 不是变量 variable 的类型(变量没有类型)
// 2. null 判断为 object 为 bug
// 3. object 只有 function 和 object 两种类型可以被判断出来