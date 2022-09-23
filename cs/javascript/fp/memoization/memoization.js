// compute factorials and cache results as properties of the function itself
// 优化 factorials
// 下次递归的时候， 可以访问之前 cache 的数据
function factorial(n) {
    if (isFinite(n) && n == Math.round(n) && n > 0) {
        if (!(n in factorial)) {
            factorial[n] = n * factorial(n - 1);

        }
        return factorial[n];
    }
    else
        return NaN;
}

factorial[1] = 1;

console.log(factorial(5));


// IN FP, above kind of caching is called memoization
function memoize(f) {
    let cache = {};

    return function () {
        // 创建一个 arguments 对应的 key 
        let key = arguments.length + Array.prototype.join.call(arguments, '');

        if (key in cache)
            return cache[key];
        else {
            return cache[key] = f.apply(this, arguments);
        }
    }
}


function gcd(a, b) {
    let t;
    if (a < b)
        t = b, b = a, a = t;

    while (b !== 0)
        t = b, b = a % b, a = t;

    return a;
}

let gcdmemo = memoize(gcd);
console.log(gcdmemo(85, 187));

let factorialdemo = memoize(function (n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
});

console.log(factorialdemo(5));

