// 屌丝版 exec 
// 只有匹配结果 true false

const str = 'hello world!';
const regexp = /o/;
const regexp1 = /o/g;

console.log(regexp.test(str));
console.log(regexp.test(str));

let result;

while ((result = regexp1.test(str))) {
  console.log(`Found success!!! the next index is ${regexp1.lastIndex}`);
}
