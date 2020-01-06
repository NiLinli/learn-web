// things which are slow and on that staxk are what are blocking means.

// sync 同步
let foo = $.getSync('//foo.com');
let bar = $.getSync('//bar.com');
let baz = $.getSync('//baz.com');

console.log(foo);
console.log(bar);
console.log(baz);

// 等待完成后 才能执行下一句 blocking
// the problem is because we're running code in browsers.
// the browser is blocked,it's stuck, it can't do anything until those request complete.
// the solution?
// async callbacks
