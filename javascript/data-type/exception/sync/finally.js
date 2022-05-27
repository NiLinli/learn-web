// finally 一般用于释放 I/O, 怀疑 catch 不住

// try-catch-finally
try {
    simle();
} catch (error) {
    console.log(error.message);
} finally {
    console.log('finally');
}

// 如果 finally 中有 return , try catch 中的 return 都会被忽略
function testFinally() {
    try {
        return 0; // return 会被忽略
    } catch (error) {
        return 1;
    } finally {
        return 2;
    }
}

console.log(testFinally()); // 2


try {
    simle();
} catch (error) {
    simle();
} finally{
    console.log('即使 catch 不住, 我也要坚持释放资源啊！！！');
}

console.log('do do do')


// 兼容性：
// ie 8 以前, finally 必须和 catch 同时出现