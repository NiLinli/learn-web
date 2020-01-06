// 函数组合 composition
// The act of putting 
// two functions together to form a third function where the output of one function is the input of the other.
// 从右向左
const compose = (f, g) => (a) => f(g(a));

const floorAndToString = compose(val => val.toString(), Math.floor);
const result = floorAndToString(121.111111);

console.log(result);