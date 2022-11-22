# time

带时区的时间描述时间具有唯一性

## js date string

date string: string [version of ISO8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15)

2022-10-09T02:27:46.000+00:00

- 日期
- 时间
- 时区

## timestamp

相对于 1970-01-01 00:00:00.000+00:00 的 duration  
存储时候存的是 UTC 标准时间  
取出的时候会根据时区自动转换为本机所在时区显示  
所以 timestamp 是携带时区信息的

- unix timestamp(s) 
- js timestamp(ms)

## date object

每一种变成语言中都会有对应的内置日期对象描述  

- 带时区
- 不带时区