// callback 返回值为条件
// 满足条件添加倒新数组并返回新数组
Array.prototype.myFilter = function (callback) {

    let length = this.length,
        i = 0,
        ret = [];

    for (; i < length; i++) {
        if (callback(this[i])) {
            ret.push(this[i])
        }
    }

    return ret;
};


// 返回一个新数组
// 返回值为true 返回该value
let arr = [1, 2, 3, 4, 5, 6, 7, 87, 8];

console.log(arr.filter(v => v > 5));
console.log(arr.myFilter(v => v > 5));