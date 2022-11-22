# json

- [json 中国](http://www.json.org.cn/)

- JSON 是一种轻量级的数据 **交换格式**, 不是语言 干死了 XML 
- 它是基于 JavaScript , es3 的一个子集
- JSON 独立于程序语言, 每个语言都可以实现序列与反序列

## 组成

- JSON Object 
  - js 中的 object 就是 json object
  - 其他语言中需要把对象转变成 JSON Object
- JSON String

### parse 

将 JSON String 反序列化为一个对象 JSON Object, 可以配置过滤或者修改输入到对象中的属性

- reviver
- ...

### stringify

将 JSON Object 序列化为字符串, 可以配置过滤或者修改输出的字符串

- replacer
- ...

## JSON 表示的类型

- primtive type (simple value)
    - number
    - string
    - boolean
    - null
- object literals
    - 对象 object
    - 纪录 record
    - 结构 structure
    - 字典 dictionary
    - 哈希表 hash table
    - 有键列表 keyed list
    - 关联数组 associative array
- array
    - array
    - 矢量 vector
    - 列表 list
    - 序列 sequence

## JSON 文件

- JSON 文件后缀 `.json`
- JSON 文本的 MIME 类型是 `application/json`
- 注： JSON 文件严格按照 JSON 数据的规范而来 (不然文本无法进行解析)
    1. 只能存在 ""
    2. 不能添加注释