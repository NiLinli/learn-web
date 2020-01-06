# React router

参数: location
返回值: View

`react-router-dom` web
`react-router-native` native app

## react router dom

- router components (Router) 路由器
  + `<BrowserRouter>` 
  + `<HashRouter>`
- route matching components
  + `<Route>`
    - path
      + 没有 path 属性, 任意路由都会匹配
      + 匹配返回内容, 否则返回 null
    - component
    - render
    - children
  + `<Switch>` 匹配一个路由, 就不继续匹配了
- navigation components
  + `<Link>`     导航 
  + `<NavLink>`  可以表现出 active
  + `<Redirect>` 重定向