# JSON(JavaScript Object Notation)





## JSON 内建对象 in JavaSript

JavaScript 会转化数据为 JSON 数据规范, 方法:

- pasers        `JSON.parse()`      JSON string  -> native JavaScript value
- serializers   `JSON.stringify()`  native JavaScript value -> JSON string

ie8+ , 需要 ployfill

[JSON-js](https://github.com/douglascrockford/JSON-js)

`JSON.stringify` 带有的 options:

1. filter array  `[key1, key2]`
2. repalcer function `(key, value) => new value` 对每一个 key 进行操作

`JSON.parse` options:

1. reviver function 英[rɪ'vaɪvə] 复活 与 replacer 对应



