// \d 数字
// \D 非数字

const str = 'B2 is the suite number';

const regexp = /\d/g;
const regexp2 = /[0-9]/g;

const regexp3 = /\D/g;
const regexp4 = /[^0-9]/g;

console.log(str.match(regexp));
console.log(str.match(regexp2));
console.log(str.match(regexp3));
console.log(str.match(regexp4));
