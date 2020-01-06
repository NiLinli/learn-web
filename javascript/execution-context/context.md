# context

callstack + heap

需要关注每一个函数或者单个语句执行时候的 context

## compilation

1. Tokenizing/Lexing
2. Parsing
3. Code-Generation

## lexical scope

Scope is a set of rules for looking up variables by their identifier name

- RHS 没有找到 engine 抛出一个 ReferenceError
- LHS 没有找到(非严格模式) global scope 创建一个 variable
  - strict mode: would be no global Scope'd variable to hand back from an LHS look-up

## let-var

let

1. block scope
2. 没有变量提升(暂存死区), 声明时候才进行初始化
3. 无法重复声明

## function

### callback

callback 需要注意 this 指向

1. 传递的时候 bind this
2. arrow function
3. 内部实现使用 apply/call

## garbage collection

## eval

- modifying or creating new lexical scope at runtime.
- The JavaScript Engine has a number of performance optimizations that it performs during the compilation phase.
