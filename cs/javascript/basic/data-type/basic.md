# basic

lexical structure: 定义如何书写代码的规则

1. Unicode character set.
   - ES3: Unicode 2.1
   - ES5: Unicode 3 or later
2. Case Sensitivity (HTML 大小写不敏感 onclick, onClick)

## operator

perform actions on variables and values.

## statement

statement's completion value. - REPL 会返回

## expression

side-effect:

- function expression
- `++` `--`

## variable

除去关键字(对象 key 中可以使用关键字)
a-z, A-Z, $, or \_. It can then contain any of those characters plus the numerals 0-9.

## type & values

- typed values
- not typed variable

Values that are included directly in the source code are called **literals**.

- string
- bool
- number(double precision)
- null
- undefined
  - not undeclared
  - is not defined == is not found != undefined
- symbol(ES6)

基本类型的包装类型

1. 为 instance 实例, 需要当作对象来看 (falsy 等判断方式不适用)
2. 自动转变为 instance 时候, 生命周期需要考虑

## equlity

本质区别

- ==(Abstract Equality) allows coercion in the equality comparison
- === disallows coercion

效果

- === 类型相同 + 值相同
- == 会有隐式类型转换 (会使用的话还是有好处的)

性能

- 比较相同 type, 性能相同
- 比较不同 type, 性能并不是主要因素
- 结论： 性能并不是选用 == / === 的考虑因素, 主要考虑是不是需要隐式转换的比较

==

- true/false 不要使用
- [] '' 0 谨慎使用

## Number

- double float(默认)
- Big Int

## String

unicode utf-16

- bmp(Basic-Multilingual-Plane): code point 0x0000-0xFFFF
- ubmp(扩展字符): code point 0x010000 - 0x10FFFF (Surrogate pairs 表示)

ubmp 字符一般是用户输入的

Surrogate pairs(代理对) <=> code point

### substring

- slice
- substring
- substr

- slice/substring
  - begin index + end index
  - 默认值 0, length
- slice 支持负数
- substring 支持比大小

- substring/substr 不支持负数, 负数为 0

## Array

An array is an ordered collection of values.

- each value called an element
- each element has a numeric position in the array

### feature

1. untyped: an array element may be of any type
2. zero-based
3. use 32-bits indexes -> have a maximum array size
4. dynamic:
   - grow or shrink as needed
   - there is no need to declare a fixed size for the array
5. sparse: length is larger than the index of all elements

### array is object

JavaScript arrays are a specialized form of JavaScript object

- array indexes are really little more than property names that happen to be intergers
- numerically indexed array elements is generally significantly faster than access to regular object properties

distinguish an array index form an object property

1. all indexes are property name
2. only property names that rea integers between 0 and max array size are indexes

use arrays for numerically positioned values and use objects for named properties.

### create array

1. array literal
2. ~~Array() constructor~~ quirk and no-efficient
3. `Array.of()`
4. `Array.from()`

### read and write

- [] operator
- All array are object , so can create properties of any name on them
- only use properties that are array indexes -> update length as needed
- numbers convert to string
  1. negative
  2. not integers

### Sparse

- `Array(length:number)`
- assigning to an array index large than the current array length

### length

1. Every array has a length property, and it is property that make different from regular JavaScript object.
2. if you set the length property to a non-negative iteger n smaller than its current value, any array elements whose index is greater than or equal to n are deleted from the array.

adding named properties (regardless of . or [ ] operator syntax) does not change the reported length of the array.

### prototype

### array-like object

the behavior with Js array

1. length property is auto updated as new elements are added to the list
2. setting length to smaller value truncates the arrays
3. arrays inherit userful methods for Array.prototype
4. Arrays hava a class attribute of 'Array'

array-like object

- arguments
- DOM method return value -> DOM collection
