import { range, interval, of } from "rxjs";
import { count, take, max } from 'rxjs/operators';


// 计算源的发送最大值，并当源完成时发出该数值
// complete 后, 发送一个最大值

// number 类型
interval(100).pipe(
    take(20),
    max()
).subscribe(count => console.log(count));

// 其他类型

interface Person {
    age: number,
    name: string
}
of<Person>({ age: 7, name: 'Foo' },
    { age: 5, name: 'Bar' },
    { age: 9, name: 'Beer' }).pipe(
        max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1)
    )
    .subscribe((x: Person) => console.log(JSON.stringify(x)));


// 1--2--5--4--|
// ------------5--|