// 拍平数组
Array.prototype.concatAll = function () {
    let result = [];
    this.forEach(array => {
        result.push.apply(result, array);
    });
    return result;
};

let twoD = [[1, 2], [3, 4]];

let newArr = twoD.concatAll();

console.log(newArr);


