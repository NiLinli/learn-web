# touch & gesture

没有鼠标键盘 -> key & mouse 事件不够用 -> touch events 和 gesture events (来自于 iPhone 和 iPad IOS 2.0)

## touch

事件类型

1. `touchstart`     开始触摸屏幕
2. `touchmove`      持续
3. `touchend`       离开屏幕  
4. `touchcancel`    停止追踪触摸位置信息

event 属性

- `changedTouches` array-like object whose elements each describe the position of a touch.
- `touches`
- `targetTouches`
- `clientX`
- `clientY`
- `identifier`
- `pageX`
- `pageY`
- `screenX`
- `screenY`
- `target`

默认行为

## gesture

IOS only

1. safari Mobile 2.0
2. safari 9.0

事件

1. `gesturestart`
2. `gesturechange`
3. `gestureend`

属性：

- rotation
- scale

## 应用

- fastclick
- hammerjs 手势库
- 禁止 IOS 网页缩放
- 下拉刷新
- 抽屉菜单
