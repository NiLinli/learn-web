# Web Typography

## Inline Element

1. width height 设置了会被 user agent 忽略
    - 对于 可替换元素, 不会被忽略
2. padding
    - top bottom 不影响 line-height , 但是会扩展背景(即不影响布局)
    - 对于 可替换元素， top 和 bottom 会影响 line-height
    - left right
3. border
    - 与 padding 一样
4. margin
    - top bottom 比 padding 更不影响布局, 连背景色都没有
    - left right 可以为负数, 使文本重叠

## font

- typeface (font family)
- font (font face)

举个例子: font-family: 'CSS Mastery';

- typeface 就是 CSS Mastery
- font 就是下面的每一个文件的集合 'CSS Mastery Regular' 'CSS Mastery Italic' 'CSS Mastery Light'

### color

浏览器默认颜色一般为 black

### font-size/line-height

1. 大多数 user agent 都设置默认的 font-size：16px
2. 相对/绝对单位(medium, larger)浏览器表现不一致, 对于不同 font-family 的字体 em 计算也会有差别, 不推荐使用
3. 尽量不要设置 font-size 为小数, user agent 渲染出来不一定是精确的
4. 浏览器有最小渲染的值

#### em

1. 用在 font-size 上面的时候, 参照标准为 inherited font-size 的大小
2. 用在其他属性的时候, 参照标准变为 元素自身的 font-size

#### line height

定义

1. 两行之间 base line 的距离
2. 定义 line-height 只是定义了最小值, 不是绝对值
3. 可替换元素不应用这个效果(img)

value

1. 默认值为 normal, 一般浏览器默认为 1.2
2. scale factor(number) 直接被继承
3. percentage/em 其他的都是继承计算之后的 px 的值

### font-style

- normal
- italic
    1. 如果 typeface 中有, 则显示typeface 中的 italic 部分
    2. 如果 typeface 中没有, 浏览器会把 typeface 中的 regular 倾斜去模仿
- ...

### font-weight

绝对,一般而言

1. normal 400
2. bold 700
字体并不是提供100-900所有的等级,如果找不到对应的等级 , 只能取字体提供的附近的等级

相对, 相对与父元素

1. bolder
2. lighter

### font-family

1. 一些 font 文件的集合
2. 有 fallback mechanism
3. 有 继承性, 所有元素都可以从 body 上面继承 font-family 属性
4. 推荐总是提供一个a generic family 放在 font-family 的后面

#### Generic font families

1. Sans-serif
2. Serif
3. Monospace
4. Cursive
5. Fantasy

#### 什么时候使用 quotation marks

1. 名字中有 space
2. 名字中有 一些特殊字符 # $
3. **这个不是必须**, 现代浏览器可是识别没有 '', 但是最好遵守
4. generic font family 不能使用 quotation marks , 使用了就成了自定义字体

### font-face

定义 @font-face 使用 custom font

#### 特点(懒加载)

1. The intent of @font-face is to allow **lazy loading** of font faces. 
2. This means that only those faces needed to render a document will actually be loaded, with the rest being left alone.
3. In fact, a browser that downloads all declared font faces without considering whether they’re actually needed is considered to be buggy.

#### Font Descriptors

1. font-family: Required (this font-family is the font-family descriptor, not font-family property)
2. src: Required
    + fallback 机制, 第一个不能识别就下载下一个
    + format()
        1. 是为了告诉 user agent , 这个文件是什么格式
        2. 好处是告诉 user agent , 在下载解析文件之前根据 format() 中判断是否支持, 只下载支持的, 节省 bandwidth
    + 先 local(),再url(), 如果有的系统中有这个字体,就可以避免下载, 节省 bandwidth
3. font-weight?
4. font-style?

如果只匹配到了 font-family 和 font-weight 当中的一个 ,正确的 font-family 比 正确的 font-weight 优先级高

#### 疑问?

1. 如果一个字符, 字体里面没有, 怎么办?
2. 匹配到 font-family , 但是没有匹配到 font-weight 怎么办?
3. 匹配到 font-family , 也匹配到了 font-style , 但对应的字体文件中 没有 italic 的字符, 怎么办?

#### Loading font with Javascript

[web font loader](https://github.com/typekit/webfontloader/)
提供了加载 web font 的三种状态

1. Loading：when fonts begin loading
2. Active：success
3. Inactive：failure

## 段落样式/排版

1. 大小写/首字母大写
    - text-transform: 控制字母大小写正常转换
    - font-variant: 小型大写字母
2. word/letter spacing
    - word-spacing: 字间距
    - letter-spacing: 字符间距
    - 不对 whitespace 做任何处理
3. 换行问题(white-space(换行) --> overflow-wrap(超长单词换行) --> word-break(暴力折断单词))
    - white-space
        - normal: 遇到空白换行
        - no-wrap: 遇到空白**不换行**
    - white-space: normal; 不处理一个单词占超过一行的问题, 所以会出现单词溢出了而没有换行
    - word-wrap/overflow-wrap: break-word;  放不下的单词, 放到下一行去, 下一行一整行都放不下, 才折断这个单词
    - word-break: break-all; 放不下的单词直接折断(break-all all 很霸气)
    - hypens
4. shadow
    - color
    - x offset
    - y offset
    - blur radius for the shadow(具体模糊的方法没有定义, 不同 user agent 处理的方式不同)

## IFC

### 基本概念

- em box : font-size 定义的高度, 实际 glyphs 可以比这个 em box 高, 也可以比这个低
- content area ：
    + 普通元素: em box
    + 可替换元素: 垂直方向的 margin + border + padding + height
- inline box: 
    + 普通元素： line-height
    + 可替换元素：content area (leading 不应用与不可替换元素)
- line box: 整体 line box 的高度是由 最高 inline box 的顶部, 最低 inline box 的底部决定

### vertical-align

应用于 inline-level elements
- inline
- inline-block
- inline-table 

1. Inline-level elements are laid out next to each other in lines. 
2. Once there are more elements than fit into the current line, a new line is created beneath it.

### 特点
1. half-leading 是每个 inline box 高度的一个因素
3. 粗略的来说,  baseline 在font 高度的一半以下
4. CSS 2.1 没有定义 line box's baseline的 位置, 放置一个x 在line box 的前面就可以知道 baseline 的位置
5. middle 为    inline box 的中点   与     baseline 加 一半的 x-height 的高度 对齐
6. 背景只能到 inline box(正常情况下就是font-size的大小)

### 分析
1. 分析 inline box 
    - 普通元素: 
        1. line-height(inline box's height) 
        2. font-size(content area) 
        3. half-leading -->(line-height - font-size)/2
        4. 背景色有的为 em box , 有的比 em box 高或者低
    - 可替换元素: 
        1. content area
        2. 因为底部与 line box 的 baseline 对齐 , 所以有部分留白
2. baseline
    - 普通元素: baseline 与 baseline(line box) 对齐
    - 可替换元素: 底部与 baseline(line box) 对齐
3. 每个 inline box 设置的值与 baseline (line box) 的关系
4. 确定 line box 的 height




1. 确定 each line 的line box 
2. 分析该line box 的 top bottom text-top text-bottom baseline 等
3. 每个 inline box 的vertical-align 赋值即将 inline box 的 xx线 与 line box 的xx线对齐

### 布局工具
1. To make inline blocks align to the top (much like floats do), set vertical-align: top.
2. 每个元素垂直居中对齐
    - 都设置为 inline blocks/ inline
    - 都设置为 vertical-align: middle
        1. baseline 肯定是同一条 
        2. 每个 inline box 的中线对应的都是 baseline + half of x-height, 参照物相同, 所以互相就都对齐了
         

line box 基线的移动
vertical-align 的方式会导致 line box‘s baseline 移动
1. top bottom 不影响(可以使用)
2. 高的元素因为上下没有空间可以移动了, 所以只会能 line box 去移动适应高度元素达到 vertical-align 的对齐效果






