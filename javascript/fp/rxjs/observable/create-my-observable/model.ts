export interface Observer<T> {
    closed?: boolean;
    next: (value: T) => void;
    error: (err: any) => void;
    complete: () => void;
}

export interface Subscription {
    closed: boolean;
    unsubsribe(): void;
}


export class SafeObserver<T> {

    destination: Observer<T>;
    isUnsubscribed: boolean; // 是否取消订阅 
    _unsubscribe: Function;

    constructor(destination: Observer<T>) {
        this.destination = destination;
        this.isUnsubscribed = false;
        this._unsubscribe = function () { };
    }

    next(value: any) {
        const destination = this.destination;
        if (destination.next && !this.isUnsubscribed) {
            destination.next && destination.next(value);
        }
    }

    error(err: any) {
        const destination = this.destination;
        if (!this.isUnsubscribed) {
            this.isUnsubscribed = true;

            if (destination.error)
                destination.error(err);

            this.unsubscribe();
        }

    }

    complete() {
        const destination = this.destination;
        if (!this.isUnsubscribed) {
            this.isUnsubscribed = true;

            if (destination.complete)
                destination.complete();

            this.unsubscribe();
        }
    }

    unsubscribe() {
        // 1. 设置取消订阅, 确保 _subscribe() 失效情况下 next 不会继续实际发送
        this.isUnsubscribed = true;
        // 2. 执行 _unsubscribe()
        if (this._unsubscribe) {
            this._unsubscribe();
        }
    }

}