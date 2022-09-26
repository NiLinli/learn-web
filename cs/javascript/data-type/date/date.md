# Date

可以被格式化的

- timestamp : number
- date string : string [version of ISO8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15)
- args: year monthIndex(0-11) day hours minutes seconds milliseconds

## method

原生表现不一致, 依赖第三方 lib

1. date fns
2. moment

### 常见方法

- parse
- format

## 转化为 number

`+ new Date()`