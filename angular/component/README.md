# Component

`@angular/core` 中

依赖浏览器平台 angular.js - injected DOM `element` into `link` function, 然后可以随意的操作 DOM  (bound to a browser platform)

Angular 希望运行在不同平台上面

- browser
- mobile platform
- web worker

抽象: platform specific API 与 the framework interfaces 之间必须要抽象

the framework interfaces:

- ElementRef
- TemplateRef
- ViewContainerRef
- ViewRef
- ComponentRef

## 操作 DOM

DOM queries (decorators)

1. `@ViewChild([reference from template], {read: [reference type]})`  一个引用
    - `ElementRef` 默认, 不需要声明
    - `TemplateRef` 可以自动推导出来（`ng-template`) , 不需要声明
    - `ViewContainerRef` 必须指定(无法推导), 不然就是 `ElementRef`
2. `@ViewChildren` 多个引用 (QueryList 引用)


### ElementRef

holds the native element it’s associated with (nativeElement)
The simplest wrapper around a DOM element is 

获取方式

1. `@ViewChild()` 模版引用变量
2. 直接依赖注入获取 component(自定义 DOM 元素) 或者 directive(依附的 DOM 元素)

特点

1. tight coupling between your application and rendering layers which makes is difficult to run an app on multiple platforms. 
3. 

### TemplateRef

类似于 HTML 中的模版字符串 `<script src="xxxx" type="text/template"> ... </script>`
 For templates you have TemplateRef that allows you to create an embedded view

获取方式

1. `ViewChild()` 模版引用变量

属性

1. elementRef
2. reateEmbeddedView(context: C): EmbeddedViewRef<C>

特点：

1. 与 HTML 模版一样, 不会被解析成 DOM tree, Angular 会插入一个注释

### ViewRef

1.  In angular world a View is a fundamental building block of the application UI.
2. see UI as a composition of Views, not as a tree of standalone html tags.

Angular supports two types of views:

- Embedded Views which are linked to a Template ( embedded 美[ɪm'bedɪd] 嵌入)
- Host Views which are linked to a Component
    + Host views are created when a component is dynamically instantiated.

### ViewContainerRef

容器, 装载 ViewRef

属性: 

- element : ElementRef


## component

1. 每个 component 都是通过其 factory 创建的
2. factories 的生成是通过读取 `@Component` decorator 中的数据, 然后通过 compiler (JIT 或者 AOT) 生成

知道 factory

1. 创建一个 component
2. insert to a view

The running framework is essentially a tree of views.

Each view is composed of different types of nodes: element nodes, text nodes and so on.

1. 一个组件必须存在于某一个 module 之中
2. 其他模块使用, 必须要 import (前提是 要 export)
3. 一个组件只能 declare 在一个模块里面, 不能被重复 declare



## 组件样式 style

## change detection
1. Every framework solves the problem of synchronization between a data model (JavaScript objects) and UI (Browser DOM)
2. know when a data model changed
3. The process of checking for the changes is called change detection.

两种方式：

1. setters
2. 对比改变前后的值 
    - 什么时候对比应该结束?

Angular

1. `updateRenderer` in `viewDef`
2. track only model changes
3. using view.detectChanges 
4. ApplicationRef.tick methods


Angular application is a tree of components.



FirstCheck
ChecksEnabled 默认为 true 设置 ChangeDetectionStrategy.OnPush
Errored
Destroyed

## 属性绑定 data-bind

`@Input 属性`

1. 无论是 immutable 还是 mutable 在父组件更改, 子组件中都会发生相应的变化(可理解为总保持为一个对象或者变量)
2. 尽量不要在子组件中更改 @Input 属性, 更改只更改 mutable 中的属性(如果更改mutable 的指向或者 immutable , 输入属性就不会同步)
3. 属性更改后会调用 ngOnChanges(getter/setter)

## 生命周期 lifecycle

1. 新建
    - constructor 执行完称之后就会创建 HTML 结构(这个时候访问不到@Input 属性, 所以会template中的相关属性会报错)
    - ngOnInit
        - 该 class 包括 @Input 属性都已经初始化成功 (先调用父元素的钩子,即父元素准备好了,子元素再进行调用)
        - ngOnInit 之后，model -> view 第一次
    - ngAfterContentInit 内容投影初始化完成后调用
        1. 如果没有 ng-content 先调用父元素的钩子, 在调用子元素的钩子
        2. 如果使用了 ng-content , 与 ngAfterViewInit 顺序一样
    - ngAfterViewInit
        1. 初始化完组件视图及其子视图之后调用 (因为等到子组件全部初始化完, 所以先调用子元素的钩子, 在调用父元素的钩子)
        2. 不能更改 class 中的属性(单项数据流)
2. 更新
    - ngOnChanges(getter/setter)
        1. immutable 触发
        2. mutable 不触发
    - ngAfterContentChecked
    - ngAfterViewChecked
3. 销毁
    - ngOnDestroy
