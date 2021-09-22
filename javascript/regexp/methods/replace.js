const regexp = /b/;
const regexp1 = /b/g;
const str = 'abbbcccdddbbb';

console.log(regexp[Symbol.replace](str, 'o'));
console.log(regexp1[Symbol.replace](str, 'o'));

// replacement:
// newSubStr 支持一些特殊字符
// function  特殊字符都可以用 function 去替代

// $& 代表匹配的字符串
console.log(regexp[Symbol.replace](str, '$&abc'));
console.log(regexp1[Symbol.replace](str, '$&abc'));
console.log(
  regexp[Symbol.replace](str, function (match) {
    // match 为 $&
    return match + 'abc';
  })
);

// String.prototype
// 支持非正则表达式
console.log(str.replace('b', 'o'));
console.log(str.replace(/b/, 'o'));

class RegExpO extends RegExp {
  [Symbol.replace](str) {
    return RegExp.prototype[Symbol.replace].call(this, str, 'o');
  }
}

console.log(str.replace(new RegExpO('b')));


