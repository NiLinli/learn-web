# selectors 选择器

## Common selectors

- type(element) 标签/元素选择器
- descendant 后代选择器 **space** between two other selectors
- class
- id 浏览器一般不会检查一致性
  - js 操作
  - anchor 导航

## Advanced Selectors

- child(immediate descendants) `>` 子代选择器
- adjacent sibling `+` 紧挨着后面的一个兄弟
- general sibling `~` 后面所有的兄弟

没有向上选择器 祖先/父级/前面兄弟选择器

1. 渲染是从父到子, 从前到后, 需要记录渲染好的元素, 然后重新 apply
2. 实现复杂, 影响渲染性能

## Attribute Selector

- an attribute `input[type]` 有此特性
- the attribute’s value `input[type='text']` 有此特性, 并且值为特定值

attribute’s value 通配符判断

- `^=` 以...开头
- `$=` 以...结尾
- `*=` 任意位置匹配
- `~=` To match a value in a space-separated list of strings (such as values in rel attributes),
- `|=` the start of the value matche
  - itself
  - immediately fllowed by a dash(-)

## Pseudo Classes `:`

元素自带的类的特征, 没有明确定义, 称为伪类

### 非结构型伪类

1. `:link`
2. `:visited`
3. `:focus`
4. `:hover`
   - for pretty much any element
   - input methods like touchscreens and keyboards don’t really have hover states
5. `:active`
6. `:target` hash 值选中了
7. `:not` 不含有 xxx
8. `:lang(xxx)`
   - `[lang |= "xxx"]` 效果大致相同
   - 决定语言有很多种方面
     - :lang() 可以综合的获取所有的方面 (更加优秀)
     - [lang|=] 只能读取 element 上面的属性值

### 结构性伪类

`#demo p:nth-of-type(expression)`

子元素 p 添加伪类
找到父元素 #demo 下面的子元素集合

child 强调选中的元素 && 刚好是子元素类型 => 就会匹配  
of-type 过滤子元素类型, 生成新的集合, 然后匹配选中

expression

- odd
- even
- number
- number expression (3n + 4)
  1. n 从 0 开始, 每次加 1, 直到没有能匹配的元素为止
  2. n 必须在表达式前面

## Pseudo-Elements `::`

不要添加标签, 但是想添加内容

1. `::before` & `::after`
   - 生成内容
   - CSS2.1 禁止 float 和 positon 内容, CSS3 允许
2. `::first-line`
3. `::first-letter`

兼容性

- 新浏览器 ::
- 过时浏览器 : (IE8 写 :: 会被忽略一个 :, :: 等同于 :)

综合 ::
