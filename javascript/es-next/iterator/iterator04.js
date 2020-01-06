// 解构赋值
const obj = {
  [Symbol.iterator]: () => {
    let index = 0;

    return {
      next: () => {
        return index < 5 ? {
          value: index++,
          done: false
        } : {
          value: undefined,
          done: true
        }
      }
    }
  }
}

let [a, ...b] = obj;

console.log(a);
console.log(b);

// 扩展运算符
console.log([...obj]);