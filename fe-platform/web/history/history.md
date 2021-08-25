# history

浏览器

- 记录网页文档访问记录
- 提供前进/后退导航按钮

## 历史记录

`window.history`

1. 不能访问历史记录(安全原因)
2. 只能访问 length

## 导航

1. 浏览器 back 不会丢弃 stack top 的记录, 和 **app/小程序的差异**
2. back 之后 forward 也不会影响 history stack
3. back 之后
    - push 抛弃当前到栈顶原有的记录 => 添加新的记录
    - replace 不会抛弃当前到栈顶原有记录

- `history.go()`
- `history.go(1)` => `history.forward()`
- `history.go(-1)` => `history.back()`

## SPA

### 阻止浏览器重新加载

重新加载情况

- 地址栏 Enter (初次进入)
- a 标签导航 (hash 除外)

地址相同/不同, 都会 reload

不会 reload, 但是会添加历史记录的方式

- hash
- history pushState(ie10+)

### hash mode

#### 方法

- push => 修改 location.hash
- replace => location.replace()
- go()/back()/forward()

#### 事件

hashchange

- 改变 hash 会触发 hashchange
- 没有默认行为可以阻挡

### history mode

同源 url

#### 方法

- push => history.pushState()
- replace => history.replaceState()
- go()/back()/forward()

#### 事件

popstatechange

- push/replace **不会**触发 popstatechange/hashchange
- 没有默认行为可以阻挡
