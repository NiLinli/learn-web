// 替代混乱的 constructor 方法
export let arr1 = Array.of(1, 2, 4, 5, 6, 7, 5);

console.log(arr1);

function of(...allArgs) {
    // ts 中剩余参数
    console.log(allArgs instanceof Array);
    return Array.prototype.slice.call(arguments);
}

console.log(of(1, 2, 3, 4, 5, 6, 7));
