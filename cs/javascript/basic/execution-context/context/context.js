// execution context -> context


// 执行过程(函数执行)
// when an execution context has executed all of its code, it is destoryed, taking with it all of the variables and functions defined within it
// 最外层的 context 是 global context -> window or global...  --> exit such as when a web page is closed 

// 1. whenever code execution flows into a function , the function's context is push oto a context stack(call stack)
// 2. the function has finished executing, the stack is popped
// 3. return control to the previouslu executing context


// 函数具体执行
// 1. 创建一个作用域链
// 2. activation object 执行过程中创建
//      1. arguments ( this doesn't exist for the global context)
//      2. 扫描上下文中 函数声明， 解析阶段这些声明就不管了(这个过程就是代码申明提升的过程)
//      3. 扫描上下文中以 var (let 不扫描)声明的变量，赋值undefined
// 3. 决定 this的指向


// 执行时候 (便于理解的)
let executionContextObj = {
    'scopeChain': { /* variableObject + all parent execution context's variableObject */ },
    'variableObject': { /* function arguments / parameters, inner variable and function declarations */ },
    'this': {}
}

// 变量使用var let定义了 -> 添加到 最近的 context 中
// 变量没有使用var 定义 ( 这也算定义了，毕竟找得到 identifier name) -> 添加到 global context
function foo(){
    name = '123'; // 未使用 var let 定义
}
foo();
console.log(name);



// scope chain 查找 identifier
// Identifiers are resolved by navigating the scope chain in search of the identifier name.
// If the identifier isn't found , typically an error occurs. (ReferenceError: name is not defined)
// 变量未定义：
function foo(){
    console.log(name);
}
foo();
// 可以使用 in 查找 global context 中是否存在 identifier (只能找var 定义的)


// 除了 global 和 function
// 1. catch
// 2. with
// 3. eval

