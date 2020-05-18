import { ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle } from '@angular/router';

// 路由复用策略 + 路由存储(还原策略)
export class CustomReuseStrategy implements RouteReuseStrategy {

    constructor() {

    }

    handlers: { [key: string]: DetachedRouteHandle } = {};

    // 1. 先判断这个的返回值, 决定是否直接把当前路由的内容直接 给 新的 路由页面(复用当前路由)
    // 2. 调用了两次
    // 3. a -> b , a b 不相同, b 不需要 a 的内容 (return false)
    shouldReuseRoute(
        future: ActivatedRouteSnapshot,
        curr: ActivatedRouteSnapshot
    ): boolean {
        console.log('shouldReuseRoute', future, curr);

        // 第一次进来都是 null

        console.log(future.routeConfig && future.routeConfig.path);             // 
        console.log(curr.routeConfig && curr.routeConfig.path);                 // 导航目标路由, 当前路由
        return future.routeConfig === curr.routeConfig;
    }


    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        console.log('shouldDetach', route);
        console.log(route.routeConfig && route.routeConfig.path);
        return true;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        console.log('store', route, handle);
        console.log(route.routeConfig && route.routeConfig.path);
        this.handlers[route.routeConfig.path] = handle;
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        console.log('shouldAttach', route);
        console.log(route.routeConfig && route.routeConfig.path);
        return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
    }

    // 操作当前路由
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        console.log('retrieve', route);
        console.log(route.routeConfig && route.routeConfig.path);
        if (!route.routeConfig) {
            return null;
        }
        return this.handlers[route.routeConfig.path];
    }




}

// tab2 -> tab1
//

// shouldReuseRoute
// null
// null

// shouldReuseRoute
// tab2
// tab1

// retrieve
// tab1

// shouldDetach
// tab2
// store
// tab2

// shouldAttach
// tab1
// retrieve
// tab1

// store
// tab1

// https://stackoverflow.com/questions/41280471/how-to-implement-routereusestrategy-shoulddetach-for-specific-routes-in-angular
// https://www.cnblogs.com/lovesangel/p/7853364.html
// https://github.com/angular/angular/issues/16713 为什么 shouldDetach is false , 组件依然没有办法触发 ngDestroy
// https://stackoverflow.com/questions/46519512/angular2-routereusestrategy-lifecycle-hooks

// https://netbasal.com/angular-2-router-routeroutlet-events-8b0803d88082 router 还原信息
