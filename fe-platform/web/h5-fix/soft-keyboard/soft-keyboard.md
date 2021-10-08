# soft keyboard

键盘弹起来的时候

## ios

- ios viewport **不会**发生变化, 并且 webview 没办法获取键盘的高度  
没办法将内容定位到键盘上面
- input => (position: static) 会自动滚动到 input 位置  
- input(position: absolute;) 不会自动滚动到 input 位置

## android

- android viewport 会变小, 变成顶部到键盘上方的区域  
- input => (position: static) 会自动滚动到 input 位置  
- input(position: absolute;) 不会自动滚动到 input 位置

## input(position: absolute;) 的解决方案

1. 计算 input 位置, 滚动到响应的地方
2. event
    - ios 监听 input focus 方法 (android 键盘有弹起时间, 需要延时监听)
    - android 键盘完全弹起来后 viewport 会发生变化, 监听 window.onresize 事件
