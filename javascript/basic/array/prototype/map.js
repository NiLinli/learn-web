// callback 返回值为新数组的元素

Array.prototype.myMap = function (callback) {
    let result = [];
    this.forEach((v, i, arr) => {
        result.push(callback(v, i, arr));
    });
    return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let newArr = arr.myMap((v) => v + 2);
console.log(newArr);

// ES5.1
let numbers = [1, 5, 10, 15];
let doubles = numbers.map(x => x * 2);

console.log(`numbers -> ${numbers}`);
console.log(`doubles -> ${doubles}`);

