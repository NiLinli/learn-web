// 字符组 => 单字符
// []  字符组
// [^] 否定字符组 否定指定的所有字符


// \w- 并集
const regexp = /\b[\w-]+\b/;

const regexp2 = /[A-Za-z0-9_-]/;

const regexp3 = /[^A-Za-z0-9_]/;
