# position

## 概念

- the containing block : normal (position:static) 布局中, 包含块一般是指父元素, 对于 position layout 来讲, 包含块取决于 position 的值
    - static or relative: 最近的 block-level, table-cell, or inlineblock 的父 box
    - absolute: 最近的使用了 postion (除了 static) 定位的元素


## width & height

对于 postion: abosolute 

1. 设置 width 
2. 不设置 width , 如果设置了 top 等四个值, 会推断出 width 的值 (推断出来的 width 是指 border-box 下的 width)
3. 设置了四个值, 同时也设置了 width -> 设置的 width 会覆盖推断出来的 width

比较好的解决方案：

1. 不显示设置 width , 根据四个值去做推倒
2. 设置 limited width , 限定其最小值与最大值等

## absolute

1. cotaining block 如果滚动的话, absolute 元素也会跟着滚动
2. 设置 auto 属性会使元素在本来应该存在的 normal 布局中存在
    - top
    - left/right
3. 对于 replace-element 在 absolute 定位中, 上述 width 推倒不成立

## fixed

fixed 定位表现形式和 absolute 定位基本一致, 只是 containing block 固定为 viewport   
多用来布局 framework 设计

注意点:

1. transform 里面使用 fixed 定位得不到预期的效果
2. 移动端 fixed 定位中使用 input:text 会使输入框无法点击 focus

## relative

特点

- 从正常的位置 offset
- 所占的位置不会消失

注意

- 不要同时设置 left/right , 或者 top/bottom
- CSS 2.1 定义此时 一个值被 reset 成另外一个的负数
- bottom 为 top 的负数 (同时设置 bottom/top , bottom 会被忽略)
- right 为 left 的负数 (同时设置 left/right, right 会被忽略 , left-tp-right 语言)

## sticky

Safari 和 Chrome 支持, 其他不支持


    



