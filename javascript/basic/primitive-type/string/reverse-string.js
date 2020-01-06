function reverseStr(str) {
    let arr = str.split('');
    arr.reverse(); // 会改变原数组
    return arr.join();
}