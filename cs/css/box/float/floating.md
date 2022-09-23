# floating

## float element

## clearfix

### clear 属性

- `clear:right` 不允许左边有浮动对象
  - 影响清除元素本身
  - 不影响其他元素
  - 总结：不许左边有浮动对象，就**自己滚蛋**，左边就没有

### clearfix class

利用伪元素, 利用空白的伪元素使其左右都没有浮动元素(伪元素自身换行从而撑开父盒子)

### overflow:hidden

生成一个 BFC ，利用BFC中的规则 --> 计算BFC的高度时，浮动元素也参与计算

## FC

Formatting context:

- W3C CSS2.1 规范中的一个概念
- 它是页面中的一块**渲染区域**，并且有一套**渲染规则**
- 它决定了其子元素将如何定位，以及和其他元素的关系和相互作用

### BFC

Block formatting context:

1. 它规定了内部的Block-level Box如何布局
2. 并且与这个区域外部毫不相干(不会出现文字环绕等现象, 连续两个 BFC 布局的元素表现形式就和浮动元素一样)

建立 BFC

- float 不为 none (left, right)
- postion: absolute / fixed;
- overflow 除了 visible 以外的值 **overflow: hidden;**
- display: table-cell, table-caption，inline-block
- 根元素

BFC布局规则

1. 内部的Box会在垂直方向，一个接一个地放置。
2. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
3. 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
4. BFC的区域不会与float box重叠。
5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
6. 计算BFC的高度时，浮动元素也参与计算

其特性为

1. 两个独立的 BFC 会阻止外边距折叠
2. BFC 可以承载浮动的元素, 即 BFC 内部的浮动元素的高度也会被计算
3. BFC 可以阻止元素被浮动元素覆盖( 解决文字环绕问题 )
