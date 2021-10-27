# SVG

SVG is an XML grammar for graphics.

1. `<img />` `<object />` 标签引用 svg 文件 (此时 svg 等同与一个图片) - xml 语法
2. html/javascript 中书写 `<svg>` (可以使用 DOM 进行操作)  - html 语法
   - react-native 中 react-native-svg 操作  - react-native-svg 语法
   - ...

浏览器

- 浏览器支持 ie9+
- 可以用 css 设置样式

## SVG in Javacript

Client-side JavaScript code (embedded in HTML, not in SVG) can dynamically draw graphics using SVG.

1. XML DOM 采用这个
2. SVG DOM

## SVG 常用

### viewBox

svg 中元素的单位和 viewBox 的单位

1. svg 的尺寸是依靠实际操作去定义的
2. viewBox 可以理解为一块画布 svg 中的元素大小是根据这块画布的大小来决定的
3. svg 中的单位只能理解为相对于 viewBox 的单位
4. viewBox 从某个角度定义了 svg 的长宽比例

viewBox 大小的具体确定(与 svg 单位的适配)

1. viewBox 的实际单位大小是由 svg 的宽度和高度计算出来的
2. viewBox 会自动适应以填充到 svg 中去
   1. 保持宽度高度比例 contain/cover
      - `preserveAspectRatio="xMidYMid meet"` meet 类似于 contain
      - `preserveAspectRatio="xMinYMax meet"` meet 类似于 contain
      - `preserveAspectRatio="xMidYMid slice"` slice 类似于 cover
      - `preserveAspectRatio="xMinYMax slice"` slice 类似于 cover
      - ...
   2. 不保持宽度高度比例 stretch
      - `preserveAspectRatio: 'none'`

### svg

- xmls
- width/height
- viewBox
  - 指定 width/height  viewBox 是截取其中的一部分
  - 不指定 width/height viewBox 相当于提供宽度和高度的比例

### g / use

```xml
<!-- 定义group -->
<g id="myCircle">
  <text x="25" y="20">圆形</text>
  <circle cx="50" cy="50" r="20"/>
</g>

<!-- 使用 group -->
<use href="#myCircle" x="100" y="0" fill="blue" />
<use href="#myCircle" x="200" y="0" fill="white" stroke="blue" />
```

### defs/use

类似于 g 只不过 g 会显示
defs 不会显示

### animate 等

产生动画效果

## Svg PathData

非 xml 数据模式

```text
path://....
```

