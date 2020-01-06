# functional programming lib

## lodash

## ramda

## rxjs

### Observable

### Subject

### operator

#### 创建

- create
- empty/never/throwError
- range
- defer
- of
- from/fromEvent/fromEventPattern
- timer/interval
- repeat/repeatWhen
- bindCallback/bindNodeCallback

#### 错误处理

- catch
- retry/retryWhen

#### 过滤

1. filter
2. take 类型 **截取发送值的一部分**
    - take/first 正常发出, 截取前面几个 **截取后完成**
    - takeLast/last 完成后, 取后面几个, **同步发出**
    - takeUtil 观察一个新的 Observable
    - takeWhile 观察一个 callback 的返回值
3. skip 类型 **跳过**
    - skip 正常发出, 跳过前面几个, 取后面剩下的 **只是跳过, 完整发送**
    - skipUtil 停止跳过
    - skipWhile
4. throttle **节流**
5. debounce

#### 组合(同时操作多个 Observable)

1. merge 类型 **同时执行 Observable**
    - merge (v6更新为创建操作符)
    - mergeAll  (merge 相关 高阶->低阶 动态处理多个 Observable 的 merge)
2. combine 类型 **同时执行联合的 Observable**
    - combineLateset (v6更新为创建操作符)
    - withLatestFrom (combineLateset 变体 主从关系)
    - combineAll (combineLateset 相关 高阶->低阶)
    - zip (与 combineLateset 不同)
3. concat 类型 **依次执行连接的 Observable**
    - concat (v6更新为创建操作符)
    - concatAll (flattent Observable 动态处理)
4. 其他
    - switchAll (以前叫 switch) 强调抛弃前面一个
    - startWith
    - exhaust
  
#### 转换

1. map 类型 **运算发出的每个值**
    - map
    - mapTo
    - pluck (拉出来,弹奏)
2. xxxxMap 类型 **map 返回 Observable 与 xxxAll的简化版**
    - concatMap
    - mergeMap
    - switchMap
3. window 类型 **低阶 -> 高阶**
4. buffer 类型 **缓存, 缓存数据**
    - buffer

#### 数学和聚合

1. reduce
2. count
3. max/min

#### 条件和布尔

1. defaultIfEmpty/isEmpty
2. every
3. find/findIndex

#### 工具

1. tap(do)
2. delay/delayWhen

#### operator 总结

1. xxxWhen 另外一个 Observable 决定当前的 Observable 的发送情况
2. xxxUtil 传入 callback 决定当前 Observable 的发送情况
