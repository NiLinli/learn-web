// Number
const a = undefined + undefined;
const b = false + false;
const c = true + false;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

// String
const a2 = '' + undefined;
const b2 = '' + false;
const c2 = '' + null;

console.log(a2, typeof a2);   // 'undefined'
console.log(b2, typeof b2);   // 'false'
console.log(c2, typeof c2);   // 'null'

// jsx 忽略将 false/true undefined null 转换为字符串显示
function ignoreRender(data) {
  if (typeof data === 'undefined' || typeof data === 'boolean' || (typeof data === 'object' && !data)) {
    return '';
  } else {
    return data;
  }
}