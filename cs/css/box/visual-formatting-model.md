# Visual Formatting Model

## Flow

1. normal flow (position:static)
    - 除了下面四种情况, 大多数 element 都在 normal flow 中
    - flow direction : left -> right, top -> bottom (大多数情况下)
    - 有些非西方语言 flow direction 不是这样的, 估计没机会考虑... 
2. float
3. position
4. flexible box
5. grid layout

## Element Type

1. nonreplaced element(不可以替换元素)
    - p div 
    - 这些里面有具体内容, 而且无法通过 html css 修改内容的
2. replaced element(可替换元素)
    - img
    - most form element (input...)
    - 这个元素只是起到了一个类似与 placeholder 的作用
3. root element(根元素)
    - html

## The Containing Block(包含块)

1. 对于一个 box, the containing block 时 layout context
2. static(or none) 和 relative: 包含块为父元素(并且 display 为 block-like)
3. html -> initial containing block

## Box Type

1. block box
    - 定义： elements that are visually displayed as blocks of content
    - 效果： 生成了‘new line’, 独占一行
2. inline box
3. inline-block box

## Anonymous Boxes

1. anonymous block box
2. anonymous line box
定义匿名 box 的原因, 确保了你在屏幕上面看到的所有的内容都生成了 box, 便于分析


## Box Model

1. width(并不是特指 content width)
    - content-width or border-width 
2. height
    - content-height or border-height
    - 尽量不要设置高度(no-fixed height),因为元素自身会撑起高度
    - 定高之后, 如果里面内容发生变化, 可能会溢出
    - 实在要 fixed height , 可以考虑使用 min-height
3. padding (有背景)
4. border 
5. margin
    - negative margin (width 为 auto , margin-left or margin-right 为负数, 达到子元素超出父元素的效果)
6. outline
    - user agent 会设置 input:foucus 时候的 outline
    - 由于 user agent 设置不一, 不能达到统一的效果, 所有需要将 user agent 的 outline 设置为 none
    - 使用 `border-color` 和 `border-shadow` 去模拟 outline 的效果

说明
1. padding , margin 一般为0 , 但是有些标签 user agent 会提供默认值, 需要 normalisze
2. content-box 时候, 水平垂直布局考虑七个属性
3. border-box 时候, 考虑三个

### 水平布局(border-box)
margin-left, width, marigin-right  三个加起来为 包含块 的宽度
1. width 固定
    - margin 固定
    - margin auto -> 分剩余空间
2. width auto
    - marigin 固定
    - margin: auto -> 0
3. margin-right 会在需要的时候被设置为 auto


### 垂直布局(border-box)
margin-top , height , margin-bottom 三个加起来为 包含块 的高度
1. margin-top , margin-bottom 设置为 auto , 即设置为 0
2. 包含块 height 为 auto , height 设置为 percentage -> auto
3. 包含块 height:auto (auto-height) 
    - 有 padding or border ：最上面的子元素的顶点(包括其上面的 margin) 到 最下面子元素的底部(包括其下面的 margin) , 包含块上面有 padding or boder 对应要不要上面的 margin , 同理下面也是
    - 没有 padding or border ：不包括 margin
4. margin collapse 并不是合并, 只是被重叠了 overlap
    - collapse 的时候, 需要考虑上述包含块添加 border or padding 对其的影响
    - 虽然很怪异, 但是有些用途
    - 所有的都为正, 取最大值 Math.max
    - 有负数就相加   

## Percentage
以包含块为参照物
1. width -> width 
2. height -> height
3. padding(top right bottom left) -> width
4. border 无
5. marign -> width








