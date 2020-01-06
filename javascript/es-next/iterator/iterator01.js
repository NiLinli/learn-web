// iterator 生成函数
function makeIterator(arr) {
  let nextIndex = 0;

  // 返回 iterator
  return {
    next: () => (
      nextIndex < arr.length ? {
        value: arr[nextIndex++],
        done: false
      } : {
        value: undefined,
        done: true
      })
  };
}

const it = makeIterator(['1', '2']);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


// 无穷 iterator
function idMarker() {
  let index = 0;

  return {
    next: () => ({
      value: index++,
      done: false
    })
  };
}

const it2 = idMarker();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());