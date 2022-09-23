// reduce	英[rɪˈdju:s] 美[rɪˈdu:s]
// vt.	减少; 缩小; 使还原; 使变弱;
// 1. 第一个参数为 accumulator
// 2. 每个元素运算过程相同
// 3. accumulator 和 value 进行运算, 每次运算的返回值赋值给 accumulator
// 4. 返回 accumulator

// accumulator 的初始值:
// 如果提供 initialValue , 从 index = 0 开始执行 callback
// 不提供 initialValue, initialValue 取 index = 0 的值 ,从 index = 1 开始执行 callback

let arr = [1, 3, 4, 5, 6];

let result = arr.reduce((accumulator, currentValue, currentIndex) => {

    if (currentIndex === 0) {
        console.log('initial accumulator is: ' + accumulator);
    }

    console.log('currentIndex: ' + currentIndex);
    console.log('accumulator: ' + accumulator);
    console.log('currentValue: ' + currentValue);
    console.log('-------');

    // return 的值赋值给 外部的 accumulator
    return accumulator + currentValue;
}, 10);

console.log(result);

console.log(arr.reduce((accumulator, value) => accumulator + 2)); // 9
console.log(arr.reduce((accumulator, value) => accumulator + 2, 0)); // 10

console.log(arr.reduce((accumulator, value) => 2)); // 每次返回2 , 即最后一次也返回 2

console.log('------- demo --------');
// demo
// 1. 数组求和
console.log(arr.reduce((accumulator, value) => accumulator + value));

// 2. 二维数组转化为一维数组
console.log([[0, 1], [2, 3], [4, 5]].reduce((a, b) => a.concat(b), []));

// 3. 计算数组中每个元素出现的次数
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let countedNames = names.reduce((allNames, name) => {
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
}, {});

console.log(countedNames);

// 4. 数组去重
let arr1 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result1 = arr1.sort().reduce((init, current) => {
    if (init.length === 0 || init[init.length - 1] !== current) {
        init.push(current);
    }
    return init;
}, []);
console.log(result1); //[1,2,3,4,5]


// 5. flatten 二维数组
const flattened = [[0, 1], [2, 3], [4, 5]].reduce((acc, b) => acc.concat(b),[]);
console.log(flattened);

// 6. flatten [{}, {}]
const flattenedObj = [
    { key: 'name', value: 'nixixi' },
    { key: 'age', value: '18' },
].reduce((acc, value) => {
    acc[value.key] = value.value;
    return acc;
}, {});

console.log(flattenedObj);

