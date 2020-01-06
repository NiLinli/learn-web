import { Observer } from './observer'
import { ObserverList } from './observer-list'

export class Subject {

    observers: ObserverList;

    constructor() {
        this.observers = new ObserverList();
    }

    addObserver(observer: Observer): void {
        this.observers.add(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers.removeAt(this.observers.indexOf(observer, 0));
    }

    // subject notify 调用 observer 中的方法
    notify(message: any) {
        var observerCount = this.observers.count();
        for (var i = 0; i < observerCount; i++) {
            (this.observers.get(i) as Observer).update(message);
        }
    }
}

