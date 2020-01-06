# selectors

## Common selectors

Common selectors are the real workhorses of a maintainable CSS system.

1. type(element)
2. descendant
  - allow you to target the descendants of a particular element or group of elements.
  - is indicated by a **space** between two other selectors
3. class
  - In CSS we think of class names as a way of defining what a thing is.
  - have a space-separated list of words in a single class value
  - Usage
    + define a reusable “template” for a module  
4. id
  - a single ID name can be applied to only one element on a page. (browsers don’t always check)
  - Usage
    + add extra overriding styles to the module
    + add some interaction to it with JavaScript,
    + serve as an in-page anchor for navigation.

## Advanced Selectors

1. child(immediate descendants) `>`
2. adjacent sibling `+` 紧挨着后面的一个兄弟
3. general sibling  `~` 后面所有的兄弟
4. 为什么没有 previous sibling selectors
    - 实现复杂, 并且会影响页面渲染性能
    - 需要记录渲染好的元素的, 然后 apply, 后置则不用, 因为是依次往后渲染

## Attribute Selector

target an element based on the existence of

1. an attribute 
2. the attribute’s value

Type

- `^=` 以...开头
- `$=` 以...结尾
- `*=` 任意位置匹配
- `~=` To match a value in a space-separated list of strings (such as values in rel attributes),  
- `|=`  the start of the value matche
    + itself
    + immediately fllowed by a dash(-)

## Pseudo Classes :

非结构型伪类

1. `:link`
2. `:visited`
3. `:focus`
4. `:hover`
    - for pretty much any element
    - input methods like touchscreens and keyboards don’t really have hover states
5. `:active`
6. `:target` hash值选中了
7. `:not` 不含有xxx
8. `:lang(xxx)`
    - `[lang |= "xxx"]` 效果大致相同
    - 决定语言有很多种方面
        + :lang() 可以综合的获取所有的方面 (更加优秀)
        + [lang|=] 只能读取 element 上面的属性值


### Structural Pseudo-Classes :

结构型伪类, 匹配父元素的子元素, 强调**父元素**

1. `:nth-child(expression)`
   - expression 值刚好为**子元素**类型
   - 会计算该选择符, 父元素中的子元素个数
2. `:nth-of-type(expression)`
   - 过滤子元素
   - 选中 expression 值对应的过滤的子元素
3. `:only-child`
    - 对应父元素只有一个子元素
    - 子元素为 对应的选择器

expression

+ odd
+ even
+ number
    - `:first-child` 与 `:nth-child(1)`
+ number expression (3n + 4)
    1. n 从 0 开始, 每次加 1, 直到没有能匹配的元素为止
    2. n 必须在表达式前面

## Pseudo-Elements ::

不要添加标签, 但是想添加内容 
 
1. `::before` & `::after`
    - Generated Content
    - CSS2.1  prohibit(禁止) the floating or positioning of ::before and ::after content. 
2. `::first-line` 
3. `::first-letter`

兼容性

1. 老旧的浏览器是 :, 但是 IE8 会忽略一个 ： , 算是变向支持 :: 
2. 综合来说使用 :: , 因为新的浏览器迟早是会放弃兼容 ：的


   
