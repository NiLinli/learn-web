
import { Observer } from './observer';

export class ObserverList {

    observerList: Observer[];

    constructor() {
        this.observerList = [];
    }

    add(observer: Observer) {
        return this.observerList.push(observer);
    }

    count(): number {
        return this.observerList.length;
    }

    get(index: number): Observer | undefined {
        if (index > -1 && index < this.observerList.length) {
            return this.observerList[index];
        }
    }

    indexOf(observer: Observer, startIndex: number): number {
        var i = startIndex;

        while (i < this.observerList.length) {
            if (this.observerList[i] === observer) {
                return i;
            }
            i++;
        }
        return -1;
    }

    removeAt(index: number): void {
        this.observerList.splice(index, 1);
    }
}