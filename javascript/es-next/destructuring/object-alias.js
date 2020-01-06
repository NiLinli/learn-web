// 解构变量 别名
// 赋值给非同名本地变量 (ES6 有一个扩展语法)
const p1 = {
    name: 'nixixi1',
    age: 20,
    sex: 'man'
};

let localType, localName;
let sex;

({
    name: localType,
    age: localName,
    sex: sex
} = p1);


console.log(`localType = ${localType}`);
console.log(`localName = ${localName}`);
console.log(`sex = ${sex}`);
