// Object.assign() 对象的合并,浅拷贝B
// 返回值为 target
const target = {
        a: 1
    },
    source1 = {
        a: 2,
        b: 3
    },
    source2 = {
        d: 4
    };

let returnValue = Object.assign(target, source1, source2);

console.log(`
    new target = ${JSON.stringify(target)}
    returnValue === target is ${returnValue === target}
`);

// now target = {"a":2,"b":3,"d":4}
// 字符串会以数组的方式拷入，number undefined， null 无效
console.log(Object.assign(target, 8, null, undefined, '10000', '1001'));

// 使用, 改变属性返回全新对象
const t2 = {
  name: 'nixixi',
  age: 18
};

let newT2 = Object.assign({}, t2, {
  age: 20
});

console.log(`
  newT2 = ${JSON.stringify(newT2)}
  t2 === newT2 is ${t2 === newT2}
`);

// 等同于
const t3 = {
  name: 'nixixi',
  age: 18
};
  
let newT3 = {
  ...t2,
  age: 20
};
  
console.log(`
  newT3 = ${JSON.stringify(newT3)}
  t3 === newT3 is ${t3 === newT3}
`);
  