// \
// 转义(逃逸): 一个字符多个含义
// 正常字符 => 转义成特殊意义字符
// 特殊意义字符(元字符, 内定字符) => 转义成普通字符

const str = 'abc^efg';
const regexp = /\^/;

console.log(str.match(regexp));
