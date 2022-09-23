function isDate(o) {
    return Object.prototype.toString.call(o) === '[object Date]';
}