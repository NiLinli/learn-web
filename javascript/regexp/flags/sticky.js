// sticky
// configurable: true
// 设置 lastIndex, 并从 sticky 匹配一个(不从后面匹配)

// ^ + sticky
// ^ 必须在 lastIndex 指向 单行/多行 开始位置时候才能匹配

const regexp = /^foo/my;

regexp.lastIndex = 2;

console.log(regexp.test('..foo')); // 索引 2 不是一行的开始

regexp.lastIndex = 2;
console.log(regexp.test('.\nfoo')); // 索引 2 不是一行的开始
