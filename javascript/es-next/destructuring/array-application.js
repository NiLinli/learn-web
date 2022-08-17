// swap
let a1 = 3,
  b1 = 4;
console.log(`origin a1 = ${a1}, b1 = ${b1}`);

// [a1, b1] = [4, 3];
// [4, 3] 为 temp
[a1, b1] = [b1, a1];
console.log(`exchanged a1 = ${a1}, b1 = ${b1}`);

// 克隆
// 使用 rest 收集结构的数组, 和扩展反向操作
const colors = ['darksmalon', 'yellowgreen', 'skyblue'];
const [...clonedColors] = colors;

console.log(clonedColors);
