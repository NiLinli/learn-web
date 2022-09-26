// UTC 1970-1-1 0:00

var moment = require('moment');

// 创建当前时间的timestamp
let date = new Date();
console.log(`date = ${date}`);
console.log(`+date = ${+date}`);
console.log(`date.valueOf() = ${date.valueOf()}`)
console.log(`Date.now() = ${Date.now()}`); // ES5

// 创建以本地时间为标准的timestamp
let localDate = new Date(2018, 0, 7, 0, 0, 0);
console.log(`localDate = ${localDate}`);
console.log(`+localDate = ${+localDate}`);

// 创建UTC标准时间 ，也就是GMT当地时间
let standDate = new Date(Date.UTC(2018, 0, 7, 0, 0, 0));
console.log(`standDate = ${standDate}`);
console.log(`+standDate = ${+standDate}`);

// zero
let zero = new Date(0);
console.log(zero);

let lower = moment(100000000000).utc().format('YYYY-MM-DDTHH:mm');
let upper = moment(9999999999999).utc().format('YYYY-MM-DDTHH:mm');
console.log(`
    lower = ${ lower}
    upper = ${upper}
`);

// UT+8:00
// 负数
let negetive = moment(-1000000000).format('YYYY-MM-DDTHH:mm');
console.log(negetive);




