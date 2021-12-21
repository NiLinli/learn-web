# Web Event

Event-Driven Programming

## GUI

graphical user interfaces

- event-driven programming model
- web browser generates an event
- register one or more functions to be invoked when events of that type occur

## Event

浏览器根据下列产生 Event, 通过一个 Object 去描述这个 Event

- 用户行为
- web API
- `new Event()`

### Event Object

- event type/name
- event target(element)  通常称之为 currentTarget
- 冒泡
  - `event.stopPropagation()`
  - `event.cancelBubble = true` ie8
- 默认行为(a 元素的跳转/input 输入框的输入/...)
  - `event.preventDefault()` ie9+  
  - `return false` onclick
  - `event.returnValue = false` ie8
- ...

```js
ele.addEventListener('click', (event) => {
    // 全局变量(ie9-)
    event = event || window.event;
})

// callback 中不带参数也是可以的
ele.addEventListener('click', () => {
    event = event;
})
```

#### $event

jQuery wrapper Event

- 兼容 stopPropagation 写法
- 挂载了一些新的属性 例如 delegateTarget currentTarget 等
- 支持挂载新的 data 对象
- ...

### Event Type

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

### Event Register

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

### Event Flow

DOM2 定义了事件流

1. event capture
2. target
3. event bubble

#### 事件委托 delegation

- 减少注册事件的次数
- 动态绑定事件

## Custom Event

通过 dom 生成事件而不是用户交互(API 较为混乱)

- 已有 DOM 事件
- 自定义事件

和通过浏览器产生的 Event 特性大部分相同

- bubble
- default action
- ...

### new Event()

- new Event()
- elem.dispatchEvent

### user event/action

- click(), focus(), blur()  
- 结合上面三个方法模拟
