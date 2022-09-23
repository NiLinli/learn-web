
// Observable: 单播(每一个订阅的观察者拥有单独的可观察对象的执行) 
// Subject: 特殊的Observable(多播至多个观察者)

// 1.0 创建可观察对象 Observable/Subject
// 2.0 声明观察者Observer  (不能判断是Observable/Subject)
// 3.0 Subscription 订阅

import { Subject, Observable } from 'rxjs';

let subject = new Subject();

// 添加 observer 到 观察者列表
subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

// 添加 observer 到 观察者列表
subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

// multicast 给观察者
subject.next(1);
subject.next(2);

console.log('-----------------');

// subject 没有作为 observer 去订阅 Observable
// Observable 没有去执行 subject(observer) 中的 next ... 函数
// 直接 subject.next 手动调用 -> Observer Pattern

