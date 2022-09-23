# box

## overflow

控制移除的元素怎么处理

1. visiable(默认)
2. hidden
3. scroll
    - 显示滚动条, 即使没有达到要滚动的底部, 始终显示
    - print 的时候, 浏览器会转换为 hidden
4. auto
    - 浏览器自己去判断(浏览器不坑的情况下可以使用)
    - 可以到达溢出就 scroll(即显示滚动条) 不溢出就不显示滚动条的 效果

滚动条的显示和系统有关

## visibility

取值情况:

1. visible(默认)
2. hidden
3. collapse(CSS table rendering)

说明:

- display: none;
    - 不影响 document 布局
    - 从 document flow 中移除
    - 不再 render tree 中
- visibility:hidden;
    - 依然存在, 影响布局
    - 效果同 opacity: 0;
- 父元素为 hidden, 子元素由于继承也为 hidden , 可以设置为 visible

## backgroud

### background-clip

背景显示区域
默认为 border-box
border 如果是 solid 会盖住 background
dashed 模式下看得到 background

### background-color

transparent 默认

### opacity (不透明度)

- rgba 只影响背景色, 内容, child 都不影响
- opacity 整个元素所有内容都变透明了

### background-origin

图片放置的位置, 定位, 有可能不在绘制的区域内

### background-attachment: fixed;

 类似于 fixed 定位

### background-size

- 不设置： auto 原始图片大小
- 设置指定的 width height
- 设置 一个大小, 另外一个设置为 auto 自适应
- 自动判断 image 宽高与 box 的宽高去适应 contain cover

### backgroud-image

支持多个背景图

- 使用 background 属性, 逗号隔开, 使用 shorthand 写法设置分别设置每一张图片的属性
- 使用 background- 属性设置所有图片的属性
- 提供 fallback (单张背景图属性)

## border-radius

特点

- ie9+
- 制造圆角(border-box 考虑, 一般 border-radius 远大于 border-width)
- 空出来的 box 部分 click 事件不会被触发(同理 a 标签也点击不到)

应用

- 创建圆形/椭圆形 border-radius:50%;
- 创建 pill 形状
    1. 如果取值太大, 不会被应用, 只能取能达到的最大值
    2. 设置使用具体数值, 而不是百分比
    3. x / y 一起设置
    4. 取值就是 Min(maxX, maxY) = maxY (大多数情况下)

## box-shadow

阴影, 视觉反差设计, 模拟 outline

- shadow 支持 spread radius (扩散半径) 
- inset box 里面产生 shadow , box 外面没有 (和正常情况相反)
- 支持多个 shadow

## color gradients

- ie10+
- 提供了一些 color function
- 适合做背景(可以画出很多图像)
    1. gradient pattern
    2. box shadow
    3. persudo element

## 动态布局

- img 考虑设置 max-width: 100%;
- 达到 width/height 总是占比例
    1. 设置宽度 width
    2. 设置 padding-top 百分比(依照 width), 定位
    3. 需要显示的元素定位(postion:absolute; 0 0 0 0 不适用与可替换元素)
    