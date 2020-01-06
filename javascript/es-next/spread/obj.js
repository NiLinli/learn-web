let p1 = {
    name: '倪西西'
};

// 1. 属性相同, 根据放置位置先后, 进行覆盖
// 2. 只会展开 hasOwnProperty() 的属性

let p2 = {
    ...p1,
    name: 'nixixi'
};

let p3 = {
    name: 'nixixi',
    ...p1
};

console.log(p2, p3);

// clone shadow
let p4 = { ...p1 };
console.log(p4);

// 与 Object.assign 行为一致