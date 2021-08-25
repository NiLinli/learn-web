# soft keyboard

点击输入框, 键盘弹起的时候
可能会导致一些问题
1. 输入框被键盘盖住
    - 普通情况(position: static) 实测 Android 和 IOS 都是自动滚动到 input 的位置
    - input 放在 position： absolute; 中, 不会自己滚动到相应的位置(解决这个问题 !!!)


## 1 的解决方案

1. 监听 window resize 事件 ( ios 11.3 webview 和 safari 不会触发这个事件 )
    + Android 浏览器 viewport 变小 
    + IOS 浏览器没有变化 ( 滚动的过程是移动 webview , 并不是移动网页 )
2. 监听 input focus 事件
    + 滚动到 input 地方
    + Android 键盘弹起有时间( 暂时没有测出来 IOS 有等待时间 ), 所以需要延时
