import { Observable, Subject, from } from 'rxjs';

let subject: Subject<any> = new Subject();

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

let observable: Observable<number> = from([10, 2, 3, 5]);

// subject 为一个 observer list 
// 多播
observable.subscribe(subject);

// 普通 observer 传入到 subscribe 的时候, next 函数需要执行什么都是自己定义的, 然后在 Observale 中执行 observer.next 方法
// subject 作为 observer 传入到 subscribe 的时候
// 1. next 函数已经定义好了
// 2. Observale 执行 subject(observer).next 方法
// 3. subject(observer).next 把 value 值对 观察着列表进行 multicast( 调用每一个注册在 Subject 中的 observer 上面的饿 next 方法 )

