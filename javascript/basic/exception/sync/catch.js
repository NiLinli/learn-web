// catch 语句中处理错误
// 错误继承自 Error
try {
    simle();
    console.log('我执行不了了, shit!!!');
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log(error.message);
    }
}


