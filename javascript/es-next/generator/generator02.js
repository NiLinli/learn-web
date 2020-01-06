// object-litetal 
const o = {
    createIterator: function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};

const o1 = {
    *createIterator() {
        yield 1;
        yield 2;
        yield 3;
    }
}

let iterator1 = o.createIterator(),
    iterator2 = o1.createIterator();

console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

