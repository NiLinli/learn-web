const price = 9.05000000037272;

const regexp = /(\.\d\d[1-9]?)\d*/;

// 使用 subgroup 保留部分内容
const fixedPrice = String(price).replace(regexp, '$1');

console.log(fixedPrice)