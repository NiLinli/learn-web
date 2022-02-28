// unicode - u 开启 unicode 相关功能扩展
// 支持 \u 扩展 \u{}
// 识别 ubmp

const char2 = String.fromCharCode(0xd842, 0xdfb7);

console.log(char2.codePointAt(0).toString(16));

// true
// char2 会作为两个 unit
console.log(/^\uD842/.test(char2));

// false
// char2 会作为一个整体
console.log(/^\uD842/u.test(char2));
// /^(?:\uD842(?![\uDC00-\uDFFF]))/

// true
console.log(/^\u{20bb7}/u.test(char2));

// /u 都可以通过代理对计算规则 polyfill
const regexpEmoticons = /[\u{1F600}-\u{1F64F}]/gu;
const regexpBmp = /[\u0000-\uffff]/gu;
const regexpBmp_es3 = /(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;

const moods = 'happy 🙂, confused 😕, sad 😢';
console.log(moods.match(regexpEmoticons));
console.log(moods.match(regexpBmp));
console.log(moods.match(regexpBmp_es3));

// u es3 回退方案
// bmp 平面的 限定后面不能是哪些范围, 确定一个单位是作为整体而不是一部分匹配
// ubmp 平面的 换算出对应的两个单位的范围或者具体值
// 不同系统显示的 ubpm 字符范围不同