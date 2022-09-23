# generator 生成器

Breaking Run-to-Completion

a generator is a special kind of function that can start and stop one or more times, and doesn't necessarily ever have to finish.

## generator function

必须要有返回值

## yeild

yeild: 产出 output

中断函数执行, 并且 return 一个值

expression

- next() 调用的时候传递 value 出去
- next(参数) 参数作为该 expression 的计算 value

## 用途

- generators-as-async-flow-control 不利于封装, 在封装函数中获取了实际的 iterator 对象
