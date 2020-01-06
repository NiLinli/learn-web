# size & position

dimension 尺寸

when a browser renders a document within a window, it creates a visual representation of the document in which each element has a position and a size.

CSSOM-View Module

the “viewport” is the portion of the browser that actually displays document content
For documents displayed in frames, the viewport is the `<iframe>` element that defines the frame

- 所有浏览器都支持 offsetXXX clientXXX scrollXXX 系列 不精确 整数(四舍五入)
- getBoundingClientRect() 基本支持 + 简单 fix 兼容性

## getBoundingClientRect()

(x,y)定位的话：

1. document 小于 viewport , 两个系统表现一致

返回的数据都是 snapshot

client -> web browser client -> viewport(window)

1. getBoundingClientRect() border + padding + content 返回的   Bounding box 包含盒、
    - 都是浮点数
    - top/bottom/left/right
    - width/height (ie9以上) 通过 top 计算
    - x/y (大部分未实现) 相对于 DOM coordinate 的坐标 通过 top 计算
2. getClientRects() 很纠结

```ts
// number is float
interface DOMRect {
    width: number;  // border + padding + content area
    height: number;
    bottom: number; // viewport coordinate
    left: number;
    right: number;
    top: number;
    x?: number;      // 同 left
    y?: number;      // 同 top
}
```

## 元素大小

1. 除了 scrollTop , scrollLeft 以外都是 readonly
2. 都是 snapshot


元素的大小不会因为滚动而发生变化, 考虑的东西比较少, 获得方法:

outerHeight -> border + padding + content:

1. rect.height  
2. offsetHeight  (同1)

innerHeight -> padding + content - 滚动条大小:

1. clientHeight (inline 元素为0)
2. scrollHeight = 元素包含的具体内容的总高度(包含元素的 margin 也需要算进去)

- scrollHeight: padding(计算方式有偏差) + content ( 可视 + 不可部分 ) - 滚动条

注： clientHeight 与 scrollHeight 有些浏览器表现的相反, Max Min 取值兼容

## 元素位置与滚动

scrollLeft + scrollTop (write + read) 进行滚动

1. Document Coordinate (相对于 document 的位置)
    1. 基础的
    2. 不会根据用户的滚动而发生改变
2. Viewport Coordinate (相对于 viewport 的位置)

### Viewport(window) Coordinates(视口坐标)

1. 一般使用这个编程
2. event.X 表示的是 viewport coordinates

基础

1. content area
2. all contained elements
3. 1 < 2

DocCoord = scrollbar + ViewportCoord

### 全局滚动

1. 滚动事件绑定：(代表 viewport 的)

不用使用任何 CSS , 本身就可以滚动

1. content area: viewport
    - document.documentElement (html tag)
    - document.body (quirk 模式) in Internet Explorer 5.5 and earlier
2. all contained elements：
    - document.body
3. content area 绑定 sroll 事件
    - window 或者 doucument
    - document.documentElement/document.body 的 scrollTop 控制滚动 (即为 scrollBar 的位置)
    - window.scrollTo (全局滚动独有, 支持性不好)

计算方式：

- DocCoord：
    1. getElementPosition() offsetLeft 封装的函数  offset left/top 定位 定位于最近的 offsetParent
    2. ViewportCoord + scrollbar
- scrollbar 位置:
    1. getScrollOffsets()   window.pageYOffset 或者是 content area 的 scrollTop
- ViewportCoord:
    1. getBoundingClientRect().left

应用：

1. 元素出现在 viewport 当中, 触发某个效果
2. 元素头部经过 viewport 上面, 选中这个 title

### 局部滚动

需要使用 CSS `overflow:scroll;` 才具有滚动特性

1. content area: 该元素(理解为一个局部的 viewport)
2. all contained elements：元素内部的所有内容

元素的位置D = scrollTop + 定位不知道V

client 与 scroll
test 计算 scrollHeight （内部包含 marign padding） 等

相关条件：

1. scrollTop > 0 触发了滚动
2. 触底条件： clientHeight + scrollTop = scrollHeight
