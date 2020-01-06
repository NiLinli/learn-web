# Route

1. separate different areas of the app
2. maintain the state in the app
3. protect areas of the app based on certain rules

如果没有路由(状态得不到保存)

1. 重新刷新浏览器, 不能导航到相应的页面(应用的中模块) (比如 /login )
2. 没有书签
3. 不能分享链接

## Angular 客户端路由

- 服务器端每次都要发送 http-request
- 客户端不用发送 http-request, js 渲染页面
    1. hash
    2. H5 pushState

## base 标签

1. 使用 html5 模式必须要设置( 因为路由模块是以这个为上下文的 )
    - index.html 中
    - providers :[] 中设置
2. useHash 模式不必要设置
    - `RouterModule.forRoot(routes, { useHash: true })`
    - `provides:[ { provide: LocationStrategy, useClass: HashLocationStrategy }]`

## RouterModule

根/特性模块需要 import, 一般路由模块 import 并且 export

### RouterModule 静态方法(用于导入 module 和 service)

- static forRoot(routes: Routes, config?: ExtraOptions): ModuleWithProviders
- static forChild(routes: Routes): ModuleWithProviders

### Routes: Route[]

路由配置

- path: (不能以/开头)
- component: 路由创建的 component , 位于 `<router-outlet>` 标签下面
- redirectTo: 重定向
- pathMatch: 是否完全匹配(''的时候是必须要完全匹配的, 不然任何路由都可以部分匹配'')

### 指令

1. routerLink
    - `<a routerLink="/products">Products</a>`
    - `<a [routerLink]="['/products', hero.id]">Products</a>`
    - 这个可以传参数, 推荐
2. `routerLinkActive` 激活的时候给 a 标签绑定后面的类名
    - `routerLinkActive ="..."` 一个 className
    - `routerLinkActive ="['a','b']"` 一组 className

## ActiveRoute

获得 route 当前的状态

适合的获取时机:

1. NavigationEnd 事件后
2. 组件调用 ngOnInit 钩子时候

属性

1. paramMap (v4 之前为 params)
   - 必选参数 路由定义, 路由匹配
   - 可选参数 Matrix URL方式传递
2. queryParamMap (v4 之前为 queryParams)
   - 查询参数放在? 后面的
   - 路由跳转的时候添加 NavigationExtras 可以在后面添加上当前 url 已有的查询参数
3. URL fragments
   - NG style 的锚点值
4. outlet
   - RouterOutlet 的名 (无名顶层路由为 primary)
5. routeConfig 该路由定义时候的配置
   - path
   - component
   - data 这里只有配置时候的数据, 没有 ResolveEnd 结束后取到的那部分数据
6. data ResolveEnd 事件后, 取得的数据 + routeConfig 的数据
7. url Observable
8. parent child firstChild 激活的子路由, 父路由
9. component

快照(只用一次, 避免组件销毁的时候考虑取消订阅问题)
snapshot: ActivatedRouteSnapshot
  
## 服务

1. 路由守卫
    - CanActivate 能不能访问
    - CanDeactivate 能不能离开路由
2. 加载策略( 特性模块的 bundle 什么时候加载)
    - 懒加载
    - 预加载(懒加载的前提下)
    - CanActivate 挡回来的路由 是否加载 特性模块 canLoad
3. Resolve (预加载数据)
    - 服务返回一个 Observable
    - 在需要访问的模块 ngOnInit 中获取(同步数据)
4. Reuse 策略

## Router

路由器实例: 为激活的 URL 显示应用组件,管理从一个组件到另一个组件的导航

- event Observable 可订阅
- routeState 表示路由信息的状态 (a tree of activated routes)
    - root 路由器状态树的根节点

event

导航开始事件

- NavigationStart 导航开始时候触发
- RoutesRecognized

路由守卫事件

- GuardsCheckStart
- ChildActivationStart
- ActivationStart
- GuardsCheckEnd

预加载数据事件

- ResolveStart
- ResolveEnd

组件开始工作了 constructor

- ActivationEnd
- ChildActivationEnd
- NavigationEnd

组件 model 初始化完成 调用 ngOnInit

## 资料

- [Angular router](https://leanpub.com/router)
