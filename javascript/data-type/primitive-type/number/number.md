# number

## NUMERIC

判断字符串是否是数字类型的  
`const NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;`

## 小数问题/大数问题

- [number-precision](https://github.com/nefe/number-precision) 小数 -> 字符串 -> 整数
- [bignumber.js](https://github.com/MikeMcl/bignumber.js) 大数 + 小数
- [big.js](https://github.com/MikeMcl/big.js) 小数(金融计算)
- [decimal.js](https://github.com/MikeMcl/decimal.js) 专业版小数(科学计算)

### 大数问题

- Number(安全范围内) => BigInt => Operate
- String(Numeric 非安全范围内) => BigInt => Operate

实践

1. BigInt 一般不逆向转换为 Number
2. 不同端系统传递, 如果确定是大数, 使用**字符串**传递
    - 大数字符串可以正常转换到 BigInt
    - 大数 Number 本身就会精度丢失, 转换之后依然精度丢失

## 四舍六入五看

- toFixed
- toPrecision
- toExponential

保留 precision 输出 numerical 字符串的时候都会进行 四舍六入五看
方案

fix 成四舍五入

1. 转换为整数
2. Math.round/Math.floor/Math.ceil 或者其他方案处理
