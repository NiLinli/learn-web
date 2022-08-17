// 解构赋值
const arr = [0, 0];

arr[Symbol.iterator] = () => {
  let index = 0;
  return {
    next() {
      return index < 10
        ? {
            value: index++,
            done: false,
          }
        : {
            value: 0,
            done: true,
          };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
};

let [a, ...b] = arr;

console.log(a);
console.log(b);

// 扩展运算符
console.log([...arr]);
