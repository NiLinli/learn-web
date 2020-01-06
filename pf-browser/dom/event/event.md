# Event

Event-Driven JavaScript

GUI(graphical user interfaces) 编程:

- event-driven programming model
- web browser generates an event
- register one or more functions to be invoked when events of that type occur

Event 两个要点：

- The event type is a string that specifies what kind of event occurred. (event name)
- The event target is the object on which the event occurred or with which the event is associated.

Event 特点：

- event flow (event propagation, event capturing)
- default actions

Event object：

- associated with a particular event
- contains details about that event

属性：

- type
- target || srcElement(ie8-)

- coordinates

事件对象的产生：

1. 一些是用户生成的(例如鼠标或键盘事件)
2. 由API生成(xhr...)
3. 自己创建 `new Event()`

## Event Type

Event:

- UIEvent
    - MouseEvent - click
        - WheelEvent - wheel(mousewheel)
        - DragEvent/DropEvent - (drag* drop)
    - TouchEvent  - touch*
    - FocusEvent  - focus, blur, focusin, 和 focusout
    - InputEvent(TextEvent)  - beforeinput input
    - KeyboardEvent - key* keydown， keypress 与 keyup
- load/unload
- resize
- scroll
- form - change, select

## Event Handler

- HTML Atrribute 绑定
- DOM0 绑定 DOM property - `onclick`
- DOM2
   1. IE8 `attachEvent` / `detachEvent` + `onclick` (奇葩的组合)
   2. IE9+ `addEventListener` / `removeEventListener` + `click`

`addEventListener` 支持 ie9+ , 所以这个为主

1. 调用callback 时候, 传入的 arguments
2. context
    - this 需要指向 `event.target`
    - an event handler has access to everything in the global scope
3. return value (false 阻止默认事件) - only for handlers registered as properties

特点：

1. order 顺序 property > addEventListener > attachEvent 不一定
2. Attribute 有些妙用
   - 引用 function 未加载问题

### event flow

what part of a page owns a specific event?

Event flow describes the order in which events are received on the page

触发 callback 的顺序

1. DOM2 定义了事件流
2. event capture 阶段, 主流做法不去注册, 但是有时候还是有用的
3. 一般只处理 event bubble

After the event handlers registered on the target element are invoked, most events “bubble” up the DOM tree. The event handlers of the target’s parent are invoked.
Document object -> Window object

技巧：

1. 事件委托delegation
    - 减少注册事件的次数
    - 动态绑定事件
    - 实例： ul>li    或者 form>form-control (change)

## Event Object

When an event related to the DOM is fired, all of the relevant information is gathered and stored on an object called event.

- 目标 DOM 元素信息
- event type
- 与这个事件相关的信息

callback 中获取方式：

- 参数
- 全局变量(ie9-)
  
`event = event || window.event;`

通用信息:

- target 获取 `target = event.target || event.srcElement;`
- type 事件类型
- 阻止冒泡 `event.stopPropagation()` `event.cancelBubble = true` ie8
- 阻止默认行为 `return false` onclick  `event.preventDefault()` ie9+ `event.returnValue = false` ie8

## HTML 元素默认行为

- a 元素的跳转
- input 输入框的输入

## 自定义事件

API 较为混乱, 用到的不多, 常用来模拟鼠标键盘操作以出发事件监听

1. 新建一个事件 Event , 然后触发
2. HTMLElement 提供的方法(与自己点击完全一样的效果)
    - click(), focus(), blur() 只有这三个事件
3. 上述两种方法  
    - 正常冒泡
    - a 标签和被点击效果一样, 会跳转

## $event

jQuery 将 event 对象进行了包装, 重写了 stopPropagation 等方法确保兼容性

### $event 属性

- `$event.data` 绑定时候传入的obj

```javascript
    $myDiv.on('click', { name: 'nilinli' }, function ($event) {
        console.log($event.data); // { name: 'nilinli' }
    });
```

### 事件委托

- `$event.delegateTarget` 调用jQuery事件的元素  ps: [ˈdelɪgət]委托
- `$event.currentTarget` 在事件冒泡中当前DOM元素 为this

原生：  

- delegateTarget 为 `this`
- currentTarget 为 `event.target || event.srcElement`

jQuery中(更改this指向为 currentTarget)：

- delegateTarget 为 `$event.delegateTarget`
- currentTarget 为 `this` 或者 `$event.currentTarget`

### pub/sub

1. trigger $event 对象
2. trigger topic

### namespace

- trigger 指明 namespace , event.namespace 才有值
- 不指名的话, 就执行该 namespace 下面所有的回调, 但是 event.namespace 没有值
- 注册同一事件的多个事件处理程序, 使用 namespace 便于管理

### proxy

更改 callback 的 context 指向


## 应用

轮播图拖动

1. PC pointerEvent
2. Mobile TouchEvent


viewport
window
document