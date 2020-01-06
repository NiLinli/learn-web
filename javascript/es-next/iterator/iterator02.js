// [Symbol.iterator] 上面
const obj = {
  name: 'nixixi',
  age: 18,
  [Symbol.iterator]: function () {
    let arr = Object.keys(this);
    let nextIndex = 0;
    return {
      next: () => (
        nextIndex < arr.length ? {
          value: arr[nextIndex++],
          done: false
        } : {
          value: undefined,
          done: true
        }
      )
    }
  }

};


const it = obj[Symbol.iterator](); // 返回一个 iterator 对象

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());