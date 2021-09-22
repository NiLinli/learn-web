# regular expression

String extend

正则表达式是语言无关的

- 简单字符
- 元字符
- 逃逸字符

## Assertions

断言, 明确表示

## regexp in js

Perl 是 JavaScript 为其正则表达式建模的编程语言

- 字面量
- 对象

### flags

gimuys

- global 匹配全局所有的, 而不是仅仅匹配一个
- ignoreCase 忽略大小写
- multiline  是否进行多行搜索
- unicode    开启 unicode 相关功能扩展
- sticky    从源字符串的 lastIndex 匹配开始, 不从后续匹配

#### 特性

- gy 同时存在等同于 y

### lastIndex

sticky or global,  RegExpObject 是有状态的

会记录, 修改方式

1. 直接修改
2. test exec 执行后会修改 lastIndex

### methods

- test
- search
- exec
- match
- matchAll
- replace
- split

String.prototype 上面的方法内部调用正则表达式的方法
