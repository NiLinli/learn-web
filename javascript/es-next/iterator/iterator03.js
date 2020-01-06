// array
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// arguments
function foo() {
  const it = arguments[Symbol.iterator]();
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
}

foo('arg1', 'arg2', 'arg3');

// Set
const set1 = new Set([1, 2, 4, 4]);
const setIt = set1[Symbol.iterator]();
console.log(setIt.next());
console.log(setIt.next());
console.log(setIt.next());
console.log(setIt.next());
console.log(setIt.next());
console.log(setIt.next());
console.log(setIt.next());
console.log(setIt.next());


// Map


// string
let str = '我是倪西西abc0123456';
const strIt = str[Symbol.iterator]();
console.log(strIt.next());
console.log(strIt.next());
console.log(strIt.next());
console.log(strIt.next());
console.log(strIt.next());
console.log(strIt.next());

// NodeList DOM[]