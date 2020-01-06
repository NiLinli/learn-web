// // import { ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle } from '@angular/router';

// // 存储路由的信息
// interface RouteStorageObject {
//     snapshot: ActivatedRouteSnapshot;           // 路由快照
//     handle: DetachedRouteHandle;                // detach 拆开, 用于还原的
// }

// export class CustomReuseStrategy1 implements RouteReuseStrategy {

//     storedRoutes: { [key: string]: RouteStorageObject } = {};                       // key 为 route.routeConfig.path
//     private acceptedRoutes: string[] = [                                            //
//         // 'reuse-demo/tab1',
//         // 'reuse-demo/tab2'
//         // 'tab1',
//         // 'tab2'
//     ];


//     // 1. 当前路由是否存储
//     // 决定是否存储当前路由信息，true -> store
//     shouldDetach(route: ActivatedRouteSnapshot): boolean {
//         console.log('order---shouldDetach');

//         console.log(route.routeConfig.path);
//         const detach = true;
//         console.log('detaching', route, 'return: ', detach);
//         return detach;
//     }

//     // shouldDetach 具体存储
//     store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {

//         console.log('order---store');
//         const storedRoute: RouteStorageObject = {
//             snapshot: route,
//             handle: handle
//         };
//         console.log('store:', storedRoute, 'into: ', this.storedRoutes);
//         this.storedRoutes[route.routeConfig.path] = storedRoute;
//     }

//     // 2. 要访问的路由是否还原
//     // 决定是否还原请求路由信息 true -> retrieve
//     shouldAttach(route: ActivatedRouteSnapshot): boolean {
//         console.log('order---shouldAttach');
//         console.log(route.routeConfig.path);

//         // 1. 判断是否需要还原
//         // if (this.acceptedRoutes.indexOf(route.routeConfig.path) === -1) {
//         //     return false;
//         // }

//         // 2. 判断是否存在 RouteStorageObject 提供给还原
//         const canAttach: boolean = !!route.routeConfig && !!this.storedRoutes[route.routeConfig.path];

//         if (canAttach) {
//             return true;
//         } else {
//             return false;
//         }

//         // if (canAttach) {
//         //     // 3. 看 params 和 queryParams 是否相同
//         //     const paramsMatch: boolean = this.compareObjects(route.params, this.storedRoutes[route.routeConfig.path].snapshot.params),
//         //         queryParamsMatch: boolean =
//         //             this.compareObjects(route.queryParams, this.storedRoutes[route.routeConfig.path].snapshot.queryParams);

//         //     console.log('param 比较:', paramsMatch, 'query param 比较:', queryParamsMatch);
//         //     return paramsMatch && queryParamsMatch;
//         // } else {
//         //     return false;
//         // }
//         return true;
//     }

//     // 具体还原
//     retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
//         console.log('order---retrieve');
//         if (!route.routeConfig || !this.storedRoutes[route.routeConfig.path]) {
//             return null;
//         }

//         console.log('retrieving', 'return: ', this.storedRoutes[route.routeConfig.path]);
//         return this.storedRoutes[route.routeConfig.path].handle;
//     }


//     // 首先触发这个
//     // 决定是否 reuse 当前路由: 如果为 true , 则 reuse 当前路由( tab1 -> tab2) 还是显示 tab1
//     // 返回 false 是正常情况(默认模式) -> 然后定制模式
//     shouldReuseRoute(
//         future: ActivatedRouteSnapshot,             // 要访问的路由
//         curr: ActivatedRouteSnapshot                // 当前路由
//     ): boolean {
//         console.log(curr.routeConfig && curr.routeConfig.path);
//         console.log(future.routeConfig && future.routeConfig.path);
//         // return future.routeConfig === curr.routeConfig;

//         return false;
//     }

//     /**
//      * This nasty bugger finds out whether the objects are _traditionally_ equal to each other, 
//      * like you might assume someone else would have put this function in vanilla JS already
//      * One thing to note is that it uses coercive comparison (==) on properties which both objects have, not strict comparison (===)
//      * Another important note is that the method only tells you if `compare` has all equal parameters to `base`, not the other way around
//      * @param base The base object which you would like to compare another object to
//      * @param compare The object to compare to base
//      * @returns boolean indicating whether or not the objects have all the same properties and those properties are ==
//      */
//     private compareObjects(base: any, compare: any): boolean {

//         // loop through all properties in base object
//         for (let baseProperty in base) {

//             // determine if comparrison object has that property, if not: return false
//             if (compare.hasOwnProperty(baseProperty)) {
//                 switch (typeof base[baseProperty]) {
//                     // if one is object and other is not: return false
//                     // if they are both objects, recursively call this comparison function
//                     case 'object':
//                         if (typeof compare[baseProperty] !== 'object' ||
//                             !this.compareObjects(base[baseProperty], compare[baseProperty])) { return false; } break;
//                     // if one is function and other is not: return false
//                     // if both are functions, compare function.toString() results
//                     case 'function':
//                         if (typeof compare[baseProperty] !== 'function' ||
//                             base[baseProperty].toString() !== compare[baseProperty].toString()) { return false; } break;
//                     // otherwise, see if they are equal using coercive comparison
//                     default:
//                         if (base[baseProperty] !== compare[baseProperty]) { return false; }
//                 }
//             } else {
//                 return false;
//             }
//         }

//         // returns true only after false HAS NOT BEEN returned through all loops
//         return true;
//     }
// }
