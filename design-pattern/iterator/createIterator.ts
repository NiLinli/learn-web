let colors: string[] = ['red', 'green', 'yellow'];

for (let i = 0; i < colors.length; i++) {
    const element = colors[i];
    console.log(element);
}

// for 
// 1 追踪 colors 数组的位置
// 2 满足条件 , 递增 i
// 缺点
// 嵌套使用, 追踪多个 i , j 的时候, 不直观
// 相似的 for 不断嵌套, 容易出错

// solve problem

// Iterator
// 专门用来迭代的对象 
// 带有特定的接口
// 指向集合位置的内部指针
// 调用了 next() 方法, Iterator 返回 下一个值

export interface UserIterator<T> {
    next(): IteratorResult<T>;
}


export interface IteratorResult<U> {
    value: U;
    done: boolean;
}


function createIterator(items: any): UserIterator<any> {
    let i = 0;
    return {
        next: function () {
            let done = (i >= items.length),
                value = !done ? items[i++] : undefined;

            return {
                done: done,
                value: value
            }
        }
    }
}

let iterator = createIterator(colors);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());