# MouseEvent

- Mouse events all occur at a particular location within the browser viewport.

- click
- mousemove/mousedown/mouseup
- mouseover/mouseout - relatedTarget fromElement

使用的比较少的

- mouseenter/mouseleave - HTML5(ie 引入), 不冒泡
- contextmenu

- WheelEvent
- PointerEvent
- DragEvent

鼠标点击处:

## Viewport Coordinates

These properties indicate the location of the mouse cursor within the viewport at the time of the event and are supported in all browsers.

- clientX
- clientY

## Page Coordinates

- pageX
- pageY

Internet Explorer 8 and earlier don’t support page coordinates on the event object

## XXX Coordinates

ie only

- offsetX  is the x-coordinate of the cursor relative to the boundaries of the target element.
- offsetY

## Screen Coordinates

鼠标离电脑屏幕的 距离

- screenX
- screenY

## Modifier Keys

按着一些键同时点击鼠标

布尔属性

- shiftKey
- ctrlKey
- altKey
- metaKey (ie9+)

shiftLeft ctrlLeft altLeft

## Button

mouseup mousedown

- there is a button property on the event object that indicates the button that was pressed or released.

event.button

- 0 for the primary mouse button
- 1 for the middle mouse button (usually the scroll wheel button)
- 2 for the secondary mouse button

ie event.button

- In traditional setups, the primary mouse button is the left button and the secondary button is the right one.
- Different browsers assign different values to this property however, so it is difficult to use portably.

## Related Elements

relatedTarget

- only for mouseover and mouseout events (or mouseenter/mouseleave)
- other is null

定义

- there are other elements related to the event.

- mouseover event
  - the primary target of the event is the element that is gaining the cursor
  - the related element is the one that is losing the cursor (fromElement)
  
- mouseout
  - the primary target is the element that is losing the cursor
  - the related element is the one that is gaining the cursor (toElement)

## mousewheel event

wheel 兼容

历史

- Internet Explorer 6 first implemented the mousewheel event.
- ie8 bubble -> document (监听这个)
- ie9 bubble -> window

- DOMMouseScroll FF
- mousewheel Other

wheel 事件

- contains all standard information about mouse events
- wheel
  - wheelDelta  up 120 down -120
  - (detail * -40) ff

## DnD - drag & drop

发展历程

1. IE 最先实现, 实现的不好
2. HTML5 以 IE 的实现标准化了 DnD, 并且增加新特性

### DnD 介绍

1. user interface for transferring data between a **drag source** and **drop target**
2. in the same application or in different applications. (They have to tie into the underlying OS so that they can work between unrelated applications.)
3. APIs for implementing DnD are always complicated.
    - 实现  "move", "copy", and "link" data-transfer operations
    - 能够限制 the set of allowed operations
      - drag source - effectAllowed
      - drop target - dropEffect
    - allow the user to choose (usually using keyboard modifiers) among the permitted set.
    - must provide a way for a drag source to specify the icon or image to be dragged.
    - must provide event-based notification to both the drag source and the drop target of the progress of the DnD interaction.

### DnD in Browser

浏览器默认 DnD 行为:

- 可以将浏览器里面选中的文字拖出到其他应用
- 拖进浏览器(浏览器作为 drop target, 默认行为)
  1. url 解析 -> 导航
  2. 文本 -> 显示
  3. 图片 -> 显示
- 拖进 `[input='text']` 或者 `textarea`(选中状态下, 默认行为为读取 setData 设置的信息)

自定义 DND:

- drag sources 传递比本身内容更加多的信息
- drop targets 改变默认行为

事件:

- one set that is fired on the drag source
- another set that is fired on the drop target

属性：

- MouseEvent 相关
- dataTransfer
  - transfer string data from the dragged item to the drop target.
  - scope 只存在与事件处理程序范围内

### drag sources

HTML 中默认可以 drag 的 (其他需要添加 HTML draggable attribute):

1. images   - setData() is called and the URL is stored
2. links    - setData() is called and the URL is stored
3. text(选中的部分) - the browser calls setData() and stores the dragged text in the “text” format

事件响应顺序:

1. dragstart - source 拖拽开始的时候, 初始化各种传输数据
    - `dataTransfer.setData()/dataTransfer.items.add()` 自定义数据存储
    - `dataTransfer.setDragImage()` 自定义拖拽跟随图像
    - `dataTransfer.effectAllowed`  表明 dragged item 能够被允许的 dropEffect
2. drag - drag 的过程中不断响应
    - 可以改变初始化数据
    - 但是一般不需呀订阅这个事件
3. dragend - drag 结束

样式:

1. 浏览器不会主动去改变 drag source 的样式
2. 大多数浏览器会创建一个半透明的 copy element 在鼠标的下面

### drop target

When an item is dragged over a **valid** drop target, the following sequence of events occurs

1. dragenter - drag source 全部进入了 drag target, 这是时候界面应该有所变化提示用户
    - `event.preventDefault();`  触发 drop 事件 -> 使 drop target 合法化
    - 设置 `dropEffect` 告知浏览器什么 drop behaviors (光标的效果), 前提必须满足 effectAllowed
2. dragover - 类似与 `touchmove`
    - `event.preventDefault();`  触发 drop 事件
    - 设置 `dropEffect`
3. dragleave - 类似于 `mouseout`
4. drop - drag source 释放鼠标到合法的 drop target(不合法触发 dragleave)
    - `event.preventDefault();` 阻止默认行为(导航或者显示文本图片等)
    - 获取传输数据
      - dataTransfer.getData() 只有在这个事件中才能访问的到
      - dataTransfer.files     拖拽一个或多个文件到 drop target, 可以访问这个属性 (array-like)
      - dataTransfer.items[]
      - dateTransfer.types    key 的 array-like 列表

## Touch Device Support

Touch devices running iOS or Android have interesting implementations

- The dblclick event is not supported at all (这个有默认行为  window zooms)

1. mousemove
2. mousedown
3. mouseup
4. click

Accessibility Issues