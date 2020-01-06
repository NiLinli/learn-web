console.log(Number('1'));   // 1
console.log('123123' - 0);  // 123123
console.log(true - 0);      // 1
console.log(false - 0)      // 0


console.log(null - 0);  // 0
console.log(false - 0); // 0

let arr = [1];
arr.toString = function() {
  return 2;
}
console.log(arr - 0);   // [1] toString

console.log(undefined - 0); // NaN
console.log('abc' - 0);     // NaN
console.log({} - 0);        // NaN
console.log([1, 2, 3] - 0); // NaN


