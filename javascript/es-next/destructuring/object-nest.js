const nodeNest = {
    type: 'Identifier',
    name: 'foo',
    loc: {
        start: {
            line: 1,
            column: 1
        },
        end: {
            line: 1,
            column: 4
        }
    }
};

let {
    loc: {
        start
    }
} = nodeNest;

// console.log(loc);           // x 只解构最里面一层
console.log(start);
