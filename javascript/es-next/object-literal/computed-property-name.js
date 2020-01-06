// es5
let firstname = 'first name';

const p1 = {};
p1[firstname] = 'ni';   // 不能直接声明事后使用

// es6
const p2 = {
  [firstname] : 'ni'    // 可以直接添加
}


console.log(p1, p2);