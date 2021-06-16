// 空值合并
const defaultValue = 'default';

const a = 0;
// falsy
const b1 = a || defaultValue;
// null undefined
const b2 = a ?? defaultValue;

const b3 = (typeof a === 'undefined' && typeof a === void 0) ? defaultValue: a;

console.log(b1, b2, b3);


// ?? 比 || 安全