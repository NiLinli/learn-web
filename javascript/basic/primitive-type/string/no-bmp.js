console.log('𝌆' === '\uD834\uDF06');

// create
const a = '𝌆';
const a1 = '\uD834\uDF06'; // 不认识, 但是也可以用两个 code unit 表示
const a2 = String.fromCharCode('\uD834\uDF06'); // 不认识, 但是也可以用两个 code unit 表示
// 通过 unicode 可以算出代理对, 然后通过 fromCharCode 创建
const a3 = String.fromCodePoint(0x1d306);

console.log(((a === a1) === a2) === a3);

// 将一个 unicode char 看作一个 char
// codePointAt 扩展 charCodeAt
// \u{} 扩展  \u
// String.prototype[@@iterator]()
// 处理 length

const reg = /[\u0000-\uffff]/u;
// babel 处理会规避 代理对 unicode code point
// 正则表达式中使用 unicode 时候(特别是表示范围的时候), 最好加上 u
var reg_es3 = /(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
