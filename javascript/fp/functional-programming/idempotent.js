// 英[aɪ'dempətənt]
// 幂等性: 执行多次 等同与 执行一次
// f(f(f(x)) = f(x)

const result1 = Math.abs(Math.abs(10)) === Math.abs(10);
const result2 = [2, 1].sort().sort().toString() === [2, 1].sort().toString();

console.log(result1, result2);