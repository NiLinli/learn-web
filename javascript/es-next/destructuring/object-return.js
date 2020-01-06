// 解构语句表达式的值为右边的对象
// 1. 解构 变量赋值了
// 2. 新生成了一个对象
let pName, pAge;
let obj = ({
    pName,
    pAge
} = {
        pName: 'nixixi',
        pAge: 18
    });

console.log(pName); // nixixi
console.log(obj); 