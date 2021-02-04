const browserslist = require('browserslist');

const query = require('./package.json').browserslist;
const browsers = browserslist(query, {});

console.log(browsers);

// 根据 query 参数, 查询支持的浏览器列表

// [ 'and_chr 88',
//   'and_ff 83',
//   'and_qq 10.4',
//   'and_uc 12.12',
//   'android 81',
//   'baidu 7.12',
//   'bb 10',
//   'chrome 88',
//   'chrome 87',
//   'chrome 86',
//   'edge 88',
//   'edge 87',
//   'firefox 85',
//   'firefox 84',
//   'firefox 83',
//   'ie 11',
//   'ie 10',
//   'ie_mob 11',
//   'ios_saf 14.0-14.3',
//   'ios_saf 13.4-13.7',
//   'ios_saf 12.2-12.4',
//   'kaios 2.5',
//   'op_mini all',
//   'op_mob 59',
//   'opera 72',
//   'safari 14',
//   'samsung 13.0' ]