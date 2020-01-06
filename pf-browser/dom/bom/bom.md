# BOM

## 无聊的属性

- self/window
- name ???
- opener

## navigator

## history

## io

- input
  - prompt
  - confirm
- output
  - alert
  - console

alert prompt confirm 同步执行, block 代码

## location

window 对象或者 a DOM 元素

从上到下越来越少

1. `location.href` 完整
2. `location.origin`  域名, 不包括/  window.origin
3. `location.pathname` /之后 ?之前 [/ , ?)
4. `location.search` ?之后 [? ,# )
5. `location.hash` #之后 [#, ---)

###

技巧：

```javascript
var a = document.createElement('a');
a.href = 'xxxxxxxxxx';
a.location;             // a 有 location 对象所有的属性
a.origin;               // 可以用来格式化 href 为 location 对象
```

### URLSearchParams

- `append` 添加
- `set` 新建或者覆盖
- `get` 取第一个
- `getAll` 取所有的, 返回数组
