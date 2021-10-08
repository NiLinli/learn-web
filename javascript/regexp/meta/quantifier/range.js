// 作用范围: 
// 最近 & 最小的一个子表达式

// x{n, m} [n, m]  
// x{n, }  [n, +oo]
// x*      [0, +oo]
// x+      [1, +oo]
// x?      [0, 1]

const name1 = 'niliiiiiiinllllilllllll';

// [2, 4]
const regexp = /l{2,4}/g;

// [5, +oo]
const regexp2 = /l{5,}/g;

console.log(name1.match(regexp));
console.log(name1.match(regexp2));


// optional ?
const str1 = 'neighbour & neighbor is all correct!!!';

console.log(str1.match(/neighbou?r/g))
console.log(str1.match(/neighbou{0,1}r/g))
