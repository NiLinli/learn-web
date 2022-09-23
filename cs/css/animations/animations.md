# animations

- transforms 移动 element
- transitions and CSS keyframe animations 在一定的时间内, 以某种方式移动

## transform

transform 依照的的是元素本身, 所以性能很高

translate: 百分比是以自己为参照物, 不是包含块

注意：

- transform 里面元素使用 postion:fixed , transform 的元素会被当作 viewport( 建立了一个新的 包含块关系 )
- transform 里面元素使用 z-index , 是相对于 transform 这个元素为标准新建的一套 z-index 系统， transform 元素 z-index 比其他元素低, 里面的元素 z-index 比外面的高也不会显示在上面

## transition

一般显示器 60Hz 60次每秒  一次 16.666666667 ms
150ms 到 200ms 之间比较合适

- 两个状态之间转变的动画, 强调两个状态
- 使用 transition 代替 DOM 动画；如果不支持css3的浏览器，只是没有动画，并不会产生副作用
- transition-property 不同状态之间属性的确定
- transition-dalay 可以在导航栏显示/隐藏之间提供延时，避免用户鼠标不小心移开
- 可以给不同的属性变化设置不同的 during function delay
- color 或者 长度宽度 可以使用 transition-property , display 这种不能使用

分析:

A -> B  读取 B 状态的 transition 属性, A 变换到 B

## animation

类似于 transiton , 但是提供了更详细的控制(transition 只有两种状态, 但是 animation 可以定义 keyframe)

### keyframe

a named keyframe animation

定义

1. animation identify
2. keyframe selector (进度 百分比 from to)

目的

1. keyframes don’t say how long this should take
2. go from this state to that state

其他

- 有的 property 没有中间值(visibility), animation-time-function 不起作用
