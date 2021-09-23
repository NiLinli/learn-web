// \w Latin alphabet 包括
// A-Z
// a-z
// 0-9
// _

// \W 非拉丁字母表


const str = 'B2 is the suite number_--';

const regexp = /\w/g;
const regexp2 = /[A-Za-z0-9_]/g;

const regexp3 = /\W/g;
const regexp4 = /[^A-Za-z0-9_]/g;

console.log(str.match(regexp));
console.log(str.match(regexp2));
console.log(str.match(regexp3));
console.log(str.match(regexp4));
