export class IteratorFromArray {

    private _array: any[];
    private _cursor: number;

    constructor(arr: any[]) {
        this._array = arr;
        this._cursor = 0;
    }

    // call-by-need
    // Lazy evaluation
    next() {
        return this._cursor < this._array.length ?
            { value: this._array[this._cursor++], done: false } :
            { done: true };
    }

    // 返回一个新的 iterator 
    map(callback: (value: any) => any) {
        const iterator = new IteratorFromArray(this._array);
        return {
            next: () => {
                const { done, value } = iterator.next();
                return {
                    done: done,
                    value: done ? undefined : callback(value)
                }
            }
        }
    }
}

let iterator = new IteratorFromArray([1, 2, 3]);
let newIterator = iterator.map(value => value + 3);

console.log(newIterator.next());
// { value: 4, done: false }
console.log(newIterator.next());
// { value: 5, done: false }
console.log(newIterator.next());
// { value: 6, done: false }
console.log(newIterator.next());