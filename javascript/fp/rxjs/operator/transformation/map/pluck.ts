import { Observable, of } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

let observable: Observable<any> = of(
    { name: 'nixixi', age: 18 },
    { name: 'nilinli', age: 20 }
);

observable.pipe(
    pluck('name')
).subscribe(value => console.log(value));

// 使用 map 等效于 pluck
observable.pipe(
    map((v) => v.name)
).subscribe(value => console.log(value));