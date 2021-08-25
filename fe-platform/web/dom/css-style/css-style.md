# css style

## 样式表

document.styleSheets 所有样式表合集

单张样式表

- rules   link 不可以操作, style 可以操作
- href    link 有, style 没有

## style 属性

写在 style attr 上面的样式

style

- `cssText` style 对应的文本, 可以获取, 可以直赋值改变
- `length` 长度, 用于循环
- `item(i)` 获取属性名
- `getPropertyValue()` 获取属性名对应的值

## ComputedStyle

获取实际应用在 element 上面的 css 样式

- `document.defaultView.getComputedStyle(elem, null)` 可以获取一个 element 的所有属性, 也可以获取单个
- `elem.currentStyle` ie
