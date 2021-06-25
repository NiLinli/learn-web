# flexbox

[demo](http://the-echoplex.net/flexyboxes/)

- flex container
- flex item (子元素)

## flex container

### main axis

#### flex-direction

1. 方向 horizontal or vertical
2. 正序/倒序 forward or reverse

#### justify-content

控制 main axis 的空白区域

### cross axis

#### align-items

1. 控制 cross axis 方向上的空白区域
2. 空白区域 = cross size - 元素自身的大小 - margin
3. 单个设置 flex-item 可以使用 `align-self`

#### align-content

align-content 整个控制多行，基于 flex-wrap: wrap;

1. 单行
    - align-items 控制即可
2. 多行
    1. align-items 控制每一行
    2. 行与行之间由 align-content 控制，思想类似于 justify-content

#### flex-wrap

1. 兼容性不是很好
2. inline-block & float 一样的表现, 多行布局
3. nowrap/wrap

### order

- 默认的 order 都为 0, 顺序按照 html 顺序进行排序
- 屏幕阅读器等不会理会 css 中的 order , 只会按照 html 上面的顺序去读, 所以建议合理的 html 顺序, 不推荐使用 order

## flex item

### 范围

- Element 节点
- 非空 Text 节点 (匿名包裹 flex item)
- 伪元素 :: before 或者是 :: after

### 特性

- float 相关属性被忽视
- vertical-align 也会被忽视
- absolute 脱离了标准流，不会影响其他flex-item ，但是会被 align-self 影响

### flex 属性

#### flex-grow

- 0; 默认不扩张
- flex-wrap 换行的话先计算换行, 然后在进行扩张

#### flex-shrink

- 1; 默认收缩
- flex-wrap 换行就不会收缩了, 因为换行后空间始终足够
- **min-width 为主轴 basic 取值时, shrink 不起作用**

#### flex-basis

- auto; 依赖于内容, 确定大小
- flex-basis 百分比相对于 flex-container 的 main-axis 方向
- 主轴 basic 取值
    1. min-width
        - flex item 中 min-width 默认为 auto
        - 特殊：min-width: auto 实际表现比 flex-basis 大，也取 min-width
    2. flex-basis
    3. width
    4. flex-basis: auto
    5. width: auto
- 根据 basic 取值来计算是否收缩或者扩张

flex item 子代使用百分比

- row width/height 都可以使用百分比
- column 只能只用 width , height 没有效果

## fallback

ie9- 不支持 flex , 需要使用回退机制

- 不支持 flex 的浏览器会将 container 识别为一个普通的 block
- 设置 flex item 为 float 或者 inline-block , 因为这个在 flex-container 生效的情况下会失效

## bugs

[flex bugs](https://github.com/philipwalton/flexbugs)
