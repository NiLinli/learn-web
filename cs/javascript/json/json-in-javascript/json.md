# JSON(JavaScript Object Notation)

1. JSON( 是一种轻量级的数据 **交换格式**, 不是语言
2. 它是基于 JavaScript , es3 的一个子集
3. JSON采用完全独立于程序语言的文本格式，很多语言支持 JSON 的 serialize 和 parser

发展历史: 干死了 XML , XML 需要采用 DOM 作为中介进行数据交换, 太麻烦

## JSON 表示的类型

即能够放入 `JSON.stringfy()` 中的类型

1. primtive type (simple value)
    - number
    - string
    - boolean
    - null
2. object literals
    - 对象 object
    - 纪录 record
    - 结构 struct
    - 字典 dictionary
    - 哈希表 hash table
    - 有键列表 keyed list
    - 关联数组 associative array
3. array
    - array
    - 矢量 vector
    - 列表 list
    - 序列 sequence

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

## JSON 文件

- JSON 文件后缀 `.json`
- JSON 文本的 MIME 类型是 `application/json`
- 注： JSON 文件严格按照 JSON 数据的规范而来 (不然文本无法进行解析)
    1. 只能存在 ""
    2. 不能添加注释

## 参考资料

- [json 中国](http://www.json.org.cn/)