# regular expression

String extend

正则表达式是语言无关的

- 简单字符
- 元字符

## 元字符

### Assertions

断言, 明确表示

- 边界
  - 行边界
  - 单词边界
- 判断(跟随或者不跟随什么才能匹配成功)
  - 向前判断
  - 向后判断

### Character Classes

描述各种字符

### Quantifiers

量词表达数量, 默认是贪婪匹配

- 具体数量
- 范围

### Range

- 字符组
- 选择

### Group

正则表达式组

1. 分组
2. 捕获

```js
// 未捕获
/(?:abc)/

// 添加到 group 中, 使用命名对象的方式
/(?<abcName>abc)/
```

### 括号总结

```js
() // group

// 其他情况下以 (? 开头都不是以 group 情形出现
(?:)  // 取消 group 捕获, 只是单纯的归类为子表达式

// 断言相关
(?=)
(?!)
(?<=)
(?<!)
```

## flags

gimuys

- global 匹配全局所有的, 而不是仅仅匹配一个
- ignoreCase 忽略大小写
- multiline 是否进行多行搜索
- unicode 开启 unicode 相关功能扩展
- sticky 从源字符串的 lastIndex 匹配开始, 不从后续匹配

## 子表达式

```js
/(abc+|de[0-9])/;
```

- | => 分拆子表达式 () 为界限
  - abc
    - a
    - b
    - c => + 号作用域 c 这个子表达式
  - de[0-9]
    - d
    - e
    - [0-9]

量词/范围元字符作用范围都是子表达式, 子表达式范围有差异

### 特性

- gy 同时存在等同于 y

## regexp in js

Perl 是 JavaScript 为其正则表达式建模的编程语言

- 字面量
- 对象

### lastIndex

sticky or global, RegExpObject 是有状态的

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
