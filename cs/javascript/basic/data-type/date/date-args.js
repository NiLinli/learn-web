// 创建是本地时间
const day0 = new Date(1995, 0);    // 必选参数
const day1 = new Date(1995, 0, 1);
const day2 = new Date(1995, 0, 1, 0);
const day3 = new Date(1995, 0, 1, 0, 0);
const day4 = new Date(1995, 0, 1, 0, 0, 0);
const day5 = new Date(1995, 0, 1, 0, 0, 0, 0);

console.log(day0, day1, day2, day3, day4, day5);
// 默认显示 UTC 时间

console.log(
  day0.getFullYear(),
  day0.getMonth(),
  day0.getDay(),
  day0.getHours(),
  day0.getMinutes(),
  day0.getSeconds(),
  day0.getMilliseconds()
);