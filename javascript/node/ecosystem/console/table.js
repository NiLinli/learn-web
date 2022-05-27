const table = console.table;

table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);    // 默认显示全部 prop
table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['b']);   // 指定 prop
table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['b', 'a']);