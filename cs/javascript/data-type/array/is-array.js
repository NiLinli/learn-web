function isArray(o) {
    return typeof o === 'object' 
        && Object.prototype.toString.call(o) === '[object Array]';
}

let arr = [1, 2, 3, 4];

console.log(isArray(arr));

console.log(Array.isArray(arr));