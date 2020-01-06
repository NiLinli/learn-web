var dateFns = require('date-fns');
var zh_cn = require('date-fns/locale/zh_cn')


const dateStr = '2019-03-16T02:11:12.500Z';




console.log(
  dateFns.format(new Date(dateStr),'YYYY-M-D h:mm:ss', { locale: zh_cn })
);

