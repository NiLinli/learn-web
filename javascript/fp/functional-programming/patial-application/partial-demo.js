const partial = require('./partial');

const f = function (x, y, z) {
    return x * (y - z);
};

console.log(partial.partialLeft1(f, 2)(3, 4)); // 2, 3, 4
console.log(partial.partialLeft2(f, 2)(3, 4)); // 2, 3, 4
console.log(partial.partialRight1(f, 2)(3, 4)); // 3, 4, 2
console.log(partial.partialRight2(f, 2)(3, 4)); // 3, 4, 2
console.log(partial.partialSkipUndefined(f, undefined, 2)(3, 4)); // 3, 2, 4

// 应用
// 定义一个有原有方法 + 固定参数的 的新方法
let cuberoot = partial.partialRight1(Math.pow, 1 / 3);

String.prototype.first = partial.partialSkipUndefined(String.prototype.charAt, 0);
String.prototype.last = partial.partialSkipUndefined(String.prototype.substr, -1, 1);

console.log('abc'.first())
console.log('abc'.last());