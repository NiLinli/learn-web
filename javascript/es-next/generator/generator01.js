// GeneratorFunction 是一个能返回 Generator 的函数
function* createGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = createGenerator();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());





// yeid 和 值或者是表达式一起使用
function* createGeneratorByArr(items) {

    for (let i = 0; i < items.length; i++)
        yield items[i];


    // error
    // 只能用与 generator 内部, 不能写在函数内部
    // items.forEach(v => {
    //     yield v;
    // })
}

let generator1 = createGeneratorByArr([1, 2, 3, 4]);

console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());



// 生成器对象 既是迭代器也是可迭代对象