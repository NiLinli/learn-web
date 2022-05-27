// Boolean
let bool = new Boolean(false);

console.log(typeof bool);   // object
console.log(bool && true);  // true

let boolValue = bool.valueOf();
let boolString = bool.toString();

console.log(typeof boolValue);
console.log(typeof boolString);

if (bool) {
    console.log('bool is instance');
}
console.log(bool === true);  // false
console.log(bool === false); // false 
console.log(bool == false); // true 两个等号 先 valueOf 后 toString 判断


console.log('----------omg-----------');

// String
let str = new String('');

let strValue = str.valueOf();
let strString = str.toString();

console.log(typeof strValue);
console.log(typeof strString);
console.log(str === ''); // false
console.log(str == ''); // true

if (str) {
    console.log('str is instance');
}

console.log('----------omg-----------');

// Number
let num = new Number(0);
let numValue = num.valueOf();
let numString = num.toString();

console.log(num === 0); // false
console.log(num == 0); // true

if (num) {
    console.log('num is instance');
}
