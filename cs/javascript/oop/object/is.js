// 判断是否相等 类似于 ===
// 修正 === 的两种情况

// +0 /-0 不应该相等
console.log(Object.is(+0, -0)); // false
console.log(+0 === -0); // true

// NaN/NaN 应该相等
console.log(Object.is(0 / 0, 0 / 0)); // true
console.log(0 / 0 === 0 / 0); // false

// Ployfill
if (!Object.is) {
  Object.is = (x, y) => {
    if (x === y) {
      // +0 !== -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // NaN !== NaN
      return typeof x === 'number' && x !== x && typeof y === 'number' && y !== y;
    }
  };
}
