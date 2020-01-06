# table 
尽量不要使用 table layout, 过于复杂, 琐碎
HTML 标签都自带 相关的 table 的display 属性, xml 不带, 需要自己设置

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

`auto` 默认
`fixed` 计算速度快

- table 的 width 不依赖 table-cell 的 content
- 每列的 width 被定义为 第一行每个 table-cell 的宽度

## resoponse table
[demo layout](http://www.filamentgroup.com/lab/tablesaw.html)

