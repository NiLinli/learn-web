[1, 2, 3, 4, 5, 6, 7].forEach(item => {
    if (item === 3) {
        return false; // return false 退出当次循环和 for 中 continue 效果一样, 当前 callback 返回, 所以退出当前循环
    }
    console.log(item);
});


let obj = {
    name: 'nilinli',
    sex: 'man'
};

[1, 2, 3, 4, 5, 6, 7].forEach((item, index, arr) => {
    if (item === 1) {
        console.log(arr);
        console.log(JSON.stringify(obj));
    }
}, obj);


// 参数 callback(value , index, array), thisArg
// 返回值 undefined

// 特点 
// 1 没有办法中止
// 2 forEach 迭代过程中不会创建副本

let arr1 = ['one', 'two', 'three', 'four'];
arr1.forEach(function (v, i, arr) {

    if (i === 0) {
        console.log(arr);
    } else if (i === 1) {
        console.log(this);
    } else {
        console.log(v);
    }
}, {
    intro: 'heheda'
});