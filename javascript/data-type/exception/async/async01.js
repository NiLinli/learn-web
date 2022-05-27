//
const someAsyncFunc = function (arr, callback) {
    setTimeout(() => {
        let data;
        try {
            data = arr.join('-');
        } catch (error) {
            return callback(error);
        }
        callback(null, data);
    }, 1000);
}


// call func
const callback = (error, data) => {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log(data);
};

someAsyncFunc(123, callback);
someAsyncFunc([1, 2, 3], callback);

// 错误的定义异步函数的方式
const errorAsyncFunc = function (arr, callback) {
    setTimeout(() => {
        let data;
        try {
            data = arr.join('-');
            callback(null, data);       // 对回调函数进行异常捕获 发生错误时 callback 执行第一次
        } catch (error) {
            return callback(error);     // callback 执行第二次
        }

    }, 1000);
}