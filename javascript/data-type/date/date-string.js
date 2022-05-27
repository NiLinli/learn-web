// 这个不可靠, 浏览器支持有差异
const dateStr = '2019-03-16T02:11:12.500Z';
const dataObj = new Date(dateStr);

console.log(dataObj);

// Date.parse 解析时间字符串为 timestamp
const timestamp = Date.parse(dateStr);
console.log(timestamp, typeof timestamp);
