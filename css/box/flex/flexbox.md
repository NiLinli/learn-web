# flexbox

很多使用 float , postion 等 trick , 使用 flex 可以轻易布局
[demo](http://the-echoplex.net/flexyboxes/)

- flex container
- flex item (直接后代 即子元素)

flexbox 布局可以控制 flex item 的范围

- size
- flow 的方向  (`flex-direction`)
    - horizontal or vertical
    - forward or reverse
- Alignment and distribution on both axes
- Ordering(顺序)

## flex container

整体确定 flex item

1. main axis ( 下面两个元素不能单独设置 flex item )
    - `flex-direction` 强调从什么方向开始摆放第一个元素
    - `justify-content`控制 main axis 的空白区域
2. cross axis
    - `align-items` 控制 cross axis 方向上的空白区域
        1. cross size - 元素自身的大小 - marigin = 空白区域
        2. 默认改变每以 flex line 中每个 flex-item的 
        3. 如果单独改变某一个，单独设置 align-self 属性即可
    - `align-content`
        1. align-content 和 align-item 的区别
            - align-item 应用到单行的每一行
            - align-content应用到多行
        2. 如果是单行， 只用考虑 align-item ，因为 一共这有一行 ，cross axis上面的空白都被这一行控制了
        3. 如果是多行， align-item 只做本质工作，控制每一 flex line， 剩余的空白 由 align-content 控制 
        4. align-content 类似于justify-content
3. flex-wrap(兼容性不是很好)

## flex item

创建了flex container之后, flex container的 child(子代) 就是flex item.
      
1. 带标签的child element
2. 非空的text节点(会被包裹为匿名 flex item)
3. 伪元素 :: before 或者是 :: after

flex-item 特性：

- float 相关属性被忽视
- vertical-align 也会被忽视
- absolute 脱离了标准流，不会影响其他flex-item ，但是会被 align-self 影响

对于每个单独的 flex item

1. align-self
2. size 三剑客
    - flex-grow: 0; 默认不扩张
        - flex-wrap 换行的话先计算换行, 然后在进行扩张
    - flex-shrink: 1; 默认收缩
        - flex-wrap 之后, 就不会收缩了, 因为换行后空间始终足够
    - flex-basic: auto; 依赖于内容, 确定大小(并且其他的大小都是根据 flex-basic 来计算是否收缩或者扩张)
        - flex-basis 百分比相对于 flex-container 的 main-axis 方向
        - 具体指覆盖 auto 值 , 其他情况, min-width > flex-basic > width

flex item 子代使用百分比

- row width/height 都可以使用百分比
- column 只能只用 width , height 没有效果


## flex-wrap

inline-block & float 一样的表现, 多行布局
相关属性： 

1. flex-wrap : nowrap; 默认不换行, wrap 属性存在兼容性问题
2. align-content 多行为整体的垂直布局

## order

- 默认的 order 都为 0, 顺序按照 html 顺序进行排序
- 屏幕阅读器等不会理会 css 中的 order , 只会按照 html 上面的顺序去读, 所以建议合理的 html 顺序, 不推荐使用 order

## fallback

ie9- 不支持 flex , 需要使用回退机制

- 不支持 flex 的浏览器会将 container 识别为一个普通的 block
- 设置 flex item 为 float 或者 inline-block , 因为这个在 flex-container 生效的情况下会失效

## bugs

[flex bugs](https://github.com/philipwalton/flexbugs)

