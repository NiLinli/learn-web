// 继承有 prototype 的各种方式
// 但是 已经存在的对象 继承 不适合 prototype 的方式

// mixin pattern 就是解决这个问题
// 为任意数量的对象(普通对象, prototype)实例添加任意多个属性

// Object.assign 代替了 自定义的 extend

export { };

let target = {
    name: 'nixixi',
    age: 18
};
let result = Object.assign(target,
    {
        city: 'wuhan'
    },
    {
        career: 'coder'
    }
);

console.log(target === result); // true
console.log(result);


