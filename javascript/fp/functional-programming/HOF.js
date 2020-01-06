// higher order function
// 满足函数作为参数 或者 返回值即可

// 函数作为参数
const filter = (predicate, xs) => xs.filter(predicate);

// 函数作为返回值
const is = (type) => x => Object(x) instanceof type;

const result = filter(is(Number), ['0', 1, 2, null]);

console.log(result);