import { from, Observable, Observer } from 'rxjs';

function multiplyByTen(input: Observable<number>): Observable<number> {
    let output: Observable<number> = Observable.create(function (observer: Observer<number>) {

        // let { next, error, complete } = observer;
        input.subscribe(
            (v) => observer.next(10 * v),
            (err) => observer.error(err),
            () => observer.complete()
        );
    });

    return output;
}

let input: Observable<number> = from([1, 2, 3, 4]);
let output: Observable<number> = multiplyByTen(input);

output.subscribe(x => console.log(x));

// 1. 操作符是函数(pure function)，它基于当前的 Observable(输入),创建一个新的 Observable(输出) 
// 2. 它的 subscription 逻辑基于第一个 Observable 
// 3. 订阅输出 Observalbe 同样会订阅输入 Observable




// instance operator(rxjs 6 改变了 使用 pipe)

(Observable.prototype as any).multiplyByTen = function (): Observable<number> {
    // this -> Observable instance
    let input: Observable<number> = this;

    let output: Observable<number> = Observable.create(function (observer:Observer<number>) {
        input.subscribe(
            (v) => observer.next(10 * v),
            (err) => observer.error(err),
            () => observer.complete()
        );
    });
    return output;
}

let observable: Observable<number> = (from([2, 3, 5, 6]) as any).multiplyByTen();

observable.subscribe(value => void console.log(value));


// static operator
// 静态操作符是附加到 Observalbe 类上的纯函数
// 通常用来从头开始创建 Observalbe (创建新的 Observable)
// 1. 创建操作符
// 2. 多个 Observables 作为输入的组合操作符