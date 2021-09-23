// 字符集 单字符
// []  字符集
// [^] 否定字符集 否定所有字符


// \w - 并集
const regexp = /\b[\w-]+\b/;

const regexp2 = /[A-Za-z0-9_-]/;

const regexp3 = /[^A-Za-z0-9_]/;
