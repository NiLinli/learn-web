// toLocalString() : 按照浏览器设置的地区相适应的格式返回日期和时间
// toString() :  通常返回带有时区信息的日期和时间
// toDateString() 
// ...
// 浏览器上表现各异，显示日期和时间上面没什么用

var moment = require('moment');

let date1 = + new Date(1994, 0, 19);

// moment.js
// Format Dates
console.log(moment(date1).format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment(date1).format('dddd'));
console.log(moment(date1).format("MMM Do YY"));
console.log(moment(date1).format('YYYY [escaped] YYYY'));
console.log(moment(date1).format());
console.log(moment(date1).format('YYYY[年] MM[月] DD[日]'))