## Scss 
使用 libsass, Node.js 实现的libsass 版本为 node-sass

## test demo
- `npm run scss` 
- `node-sass src/style.scss dest/style.css`


## 概念
- interpolation
    + 英[ɪnˌtɜ:pə'leɪʃn] 美[ɪnˌtɚpəˈleʃən]
    + n.窜改; 添写，插补
- parentheses
    + 英[pəˈrenθəsi:z] 美[pə'renθəsi:z]
    + n.圆括号，插入语，插曲 (parenthesis的名词复数)
- trailing	
    + 英['treɪlɪŋ] 美['treɪlɪŋ]
    + n. 泥浆彩饰;
    + adj. 拖尾的; 曳尾的; 被拖动的; 蔓延的;


## Nested-rules
1. 选择器嵌套, 内层的样式将它外层的选择器作为父选择器(parent-child)
    - & 在最前面
    - & 前面有其他选择器
2. 选择器生成
    - 必须以 & 开头
3. 属性嵌套

## Data type
1. variable  
    - $primary
2. list
    - 1px 2px 3px 4px 
3. 多维list
    - (1px 2px 3px 4px)(1px 2px 3px 4px)
    - 1px 2px 3px 4px, 1px 2px 3px 4px
4. map
    - (primary:blue, danger:red)

## Operation
1. / division
    + division
    + Plain CSS, no division
    + use variables along with a plain CSS(#{} style interpolation)
2. Color Operations
    + add  
    + some function 
3. String Add
    + common without quote
    + quote
        - quote + without quote = quote
        - without quote + quote = without quote
    + 带单位的 value 相加 
    + #{} style interpolation 中的动态相加
4. parentheses 提高优先级

## Interpolation 
Use SassScript variables 
1. in selectors (选择器)
2. in property names (属性名)
using #{} interpolation syntax  
因为选择器和属性名中不可能出现 quote string, 所以 variable 中存储的 quote string 会自动转为 without quote string



## Variable Defaults
`!default` scss variable can't reassign
1. no error
2. no apply


## Directive
- @import
- partial
    1. you want to import but don't want to compile to a CSS file
    2. you can add an underscore to the beginning of the filename. `_colors.scss`
- Nested @import
    1.  the imported rules will be nested in the same place as the original @import.

- @media
    1. they can be nested in CSS rules.
    2. If a @media directive appears within a CSS rule, it will be bubbled up to the top level of the stylesheet.

- minxin
    1. Mixins allow you to define styles that can be re-used 
    2. throughout the stylesheet without needing to resort to non-semantic classes like .float-left. 
    3. Mixins can also contain full CSS rule
    4. arguments 
        - define
            + `@mixin sexy-border($color, $width)` 
            + `@mixin sexy-border($color, $width: 1in)` default values
        - call
            + `@include sexy-border(blue, 1in);`
            + `@include sexy-border( $width: 2in, $color: red);`  keyword
        - trailing commas
            解决传入参数为 `0px 4px 5px #666, 2px 6px 10px #999` 带逗号, 但是又是一个参数的情况
    5. mixin names (and all other Sass identifiers) can use hyphens and underscores interchangeably
    6. content blocks
        - The block of content passed to a mixin are evaluated in the scope where the block is defined, not in the scope of the mixin.

- extend
    1. The @extend directive avoids these problems by telling Sass that one selector should inherit the styles of another selector.
    2. 通过给 extend 类名旁边添加选择器实现

- if
    1. The @if directive takes a SassScript expression and uses the styles nested beneath it if the expression returns anything other than false or null

- for 
    1. `@for $var from <start> through <end> `
    2. `<start>` and `<end>` are SassScript expressions that should return integers. 
    3. When `<start>` is greater than `<end>` the counter will decrement instead of increment.

- each
    1. `@each $var in <list or map>`
    2. $var can be any variable name, like $length or $name,
    3. `<list or map>`is a SassScript expression that returns a list or a map.


## Functions



## Output style
- nested 默认
- expanded 正常
- compact 压缩到每一行
- compress 压缩


