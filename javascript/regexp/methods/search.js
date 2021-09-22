const regexp = /b/;

const str = 'abc';

const index = regexp[Symbol.search](str);

console.log(index);

// String.prototype.search 内部调用 regexp[Symbol.search](this)
// indexOf 普通字符串 可以指定起始位置, 可以检索后续匹配项
// search  正则表达式 无法指定起始位置, 无法搜索后续匹配项
console.log(str.search(regexp));

// g or y 不会保存状态
const regexp1 = /b/g;
const str1 = 'abcccbbbc';
console.log(str1.search(regexp1));
console.log(str1.search(regexp1));
console.log(str1.search(regexp1));
