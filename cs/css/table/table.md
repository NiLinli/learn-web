# table

行列布局

尽量不要使用 table layout, 过于复杂, 琐碎
HTML 标签都自带 相关的 table 的 display 属性

- table 表格
- captions 表格标题
- thead, tbody, tfoot 三剑客, 逻辑区分三个部分
  - tr table row
  - th/td 单元头/单元格

## table cell

- content
- padding
- border
  - border-collapse ( collapse 两个合并成一个 , separate 默认 )
  - border-spacing 控制 border 之间的距离( x, y ), 对应的 html attribute cellspacing (x, x)
- marign
  - 没有 margin , 设置了也会被忽略, 不能设置
  - 使用 border-spacing

## table-layout

决定 table 宽度的计算方式

`auto` 默认, 按照内容渲染, 不可控
`fixed` 计算速度快

fixed

- table 的 width 不依赖 table-cell 的 content
- 每列的 width 被定义为 第一行每个 table-cell 的宽度

## display



## resoponse table

[demo layout](http://www.filamentgroup.com/lab/tablesaw.html)
