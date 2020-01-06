// 判断是否相等 类似于 ===


// +0 /-0
console.log(Object.is(+0, -0)); // false
console.log(+0 === -0);         // true

// NaN
console.log(Object.is(0 / 0, 0 / 0));   // true
console.log(0 / 0 === 0 / 0);           // false

// Ployfill
if (!Object.is) {

    Object.is = (x, y) => {
        if (x === y) {
            // +0 !== -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // NaN !== NaN
            return x !== x && y !== y;
        }
    }

}