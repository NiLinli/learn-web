// 使用typeof 判断需要注意 NaN 
function isNumber(o) {
    return typeof o === 'number' && Number.isFinite(o);
}
