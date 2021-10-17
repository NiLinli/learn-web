// 已有对象
let target = {
    name: 'nixixi',
    age: 18
};

let newTarget = Object.assign({},
    target,
    {
        city: 'wuhan'
    },
    {
        career: 'coder'
    }
);

console.log(newTarget);


