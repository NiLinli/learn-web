# directive

## content projection

引用组件标签的时候, 标签内添加 content, 相当于可以自定义一部分内容(不适用内容投影的时候, tag 中不能放 tag)
ngAfterContentInit 中对 content 进行操作

1. ContentChild --> get the first (会自动更新)
    - element
    - the directive
    matching the selector from the content DOM
2. ContentChildren -->  get the QueryList of elements or directives from the content DOM (会自动更新)
3. QueryList
    - 无法直接修改这个list
    - 其他方式修改的话会自动更新
    - changes 订阅, 更新之后, next 新的 QueryList
    - toArray() 改为数组操作
    - ...

## dynamic component

动态加载组件, 类似于在模版上面写 ngSwitch , 只不过这个在 js 中控制

特殊标签：

1. `ng-container`
2. `ng-template` 结构标签
    - is an Angular element for rendering HTML
    - 如果不用结构指令去使用,在界面上面不会被显示, HTML 上面被注释
    - 使用结构指令
        - templateRef: TemplateRef 取得这个 Angular element
        - viewContainer: ViewContainerRef 组件可以依赖的地方

步骤：

1. ComponentFactoryResolver 解析出具体的工厂(工厂模式)
2. viewContainerRef.createComponent() 传入具体的工厂, 生成组件

注意：

1. Angular 为HTML+ 模版中引用的 component 自动生成一个 ComponentFactory 类
2. 动态组件没有放入 HTML+ 模版中, 所以没有生成
3. 放入 NgModule 的 entryComponents 就可以手动生成

## pipe

1. build in 管道
2. pure pipe
    - 只有当 immutable 改变或者 mutable 改变指向的时候, 才会计算 (和调用 ngOnChanges 方式一样)
    - pure pipe 使用 pure function(就是返回新值, 不影响旧值)
3. impure pipe Angular 会在每个组件的变更检测周期中执行非纯管道
    - focus input 输入框
    - 点击页面
    - 非常频繁, 谨慎使用
    - 使用 impure pipe 因为里面 transform 执行的比较多, 所以不推荐使用, 或者使用带 cache 的 impure pipe
4. impure pipe with Observable(aync)
    - 接受订阅发射的值
    - 好处: 这个 Async 管道节省了组件的样板代码(不用在组件生成时订阅, 也不用在销毁时候取消订阅)
