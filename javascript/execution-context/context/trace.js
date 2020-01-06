function foo(){
    throw new Error('Opp!');
}

function bar(){
    foo();
}

function baz(){
    bar();
}

baz();

// Error: Opp!
// at foo (/Users/nilinli/github/JavaScript-Basic/0-JavaScript/execution-context/callstack/trace.js:2:11)
// at bar (/Users/nilinli/github/JavaScript-Basic/0-JavaScript/execution-context/callstack/trace.js:6:5)
// at baz (/Users/nilinli/github/JavaScript-Basic/0-JavaScript/execution-context/callstack/trace.js:10:5)
// at Object.<anonymous> (/Users/nilinli/github/JavaScript-Basic/0-JavaScript/execution-context/callstack/trace.js:13:1)

// 报错的时候 会展示 stack 的样子 