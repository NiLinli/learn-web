// \
// 转义: 正常字符 => 转义成有另外的意义字符
// 逃逸: 系统内定字符 => 逃逸成为普通字符

const str = 'abc^efg';
const regexp = /\^/;

console.log(str.match(regexp));
