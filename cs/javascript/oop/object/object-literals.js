// 对象字面量
// configurable true
// writable true
// enumerable true
// value 

let person = {
    name: 'nilinli',
    age: 29,
    'for': 'for为保留字, ES3 中必须要加引号',
    switch: 'ES5以上保留字不是必须加引号',
    sayName: function () {
        console.log(this)
    }, // 最后一个属性后面最好不要放 ,  IE 有可能会报错
}

person.sayName();

console.log(person.constructor === Object); // 对象字面量是 Object 创建的

// object literals 是一个表达式，每次运算都会创建一个独立的对象，不会指向同一个对象
var arr = [1, 2, 3, 4, 6];

arr.forEach((v) => {
    v = {
        name: 'nixixi',
        age: 18
    };
});

console.log(arr[1] === arr[2]);  // false