// \uFFFF
// \u{FFFF} \u{FFFFF}  u flag 支持

const str = String.fromCodePoint(0x1d306, 0x9982);

const regexp = /\ud834\udf06/;
const regexp2 = /\u{1d306}/u;

console.log(str.match(regexp));
console.log(str.match(regexp2));
