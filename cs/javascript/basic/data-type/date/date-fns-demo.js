const { parse, format } = require('date-fns');
const dateStr = '2019-03-16 02:11:12';

const dateObj = parse(dateStr, 'yyyy-mm-dd hh:mm:ss', new Date());
const dateObj2 = parse(dateStr, 'yyyy-mm-dd hh:mm:ss', 0);

console.log(typeof dateObj2)

console.log(format(dateObj, 'YYYY-M-D h:mm:ss'));
console.log(format(timestamp, 'YYYY-M-D h:mm:ss'));

