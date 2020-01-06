import { Observable, of } from 'rxjs';

function map(callback: any) {
    return Observable.create((observer: any) => {
        return this.subscribe(
            (value: any) => {
                try {
                    observer.next(callback(value));
                } catch (e) {
                    observer.error(e);
                }
            },
            (err: any) => { observer.error(err); },
            () => { observer.complete() }
        )
    })
}


(Observable.prototype as any).map = map;

let people: Observable<string> = of('Jerry', 'Anna');

var helloPeople = (<any>people).map((item) => item + ' Hello~');

helloPeople.subscribe(console.log);

// 1. 每个 operator 返回新的 Observable
// 2. 而这个新的 Observable 可以通过 create 内部创建

// Marble diagrams
// ---- 代表一小段时间
// x error
// | complete

// 异步发送 1--2--3---4|
// 同步发送 (1234)|

