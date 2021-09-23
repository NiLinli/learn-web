const str = 'Abcdef\nAccccf';

// ^ $ 多行模式下每行开头都可以匹配
console.log(/^A/gm[Symbol.match](str));
console.log(/f$/gm[Symbol.match](str));

// 单词边界
// \b
// \B 非边界

const str2 = 'moon light';

// 单词开头
console.log(/\bmo/[Symbol.match](str2));
// 单词结尾
console.log(/on\b/[Symbol.match](str2));
// 单词中间
console.log(/oo\b/[Symbol.match](str2));


console.log(/\Bmo/[Symbol.match](str2));
console.log(/on\B/[Symbol.match](str2));
console.log(/oo\B/[Symbol.match](str2));

