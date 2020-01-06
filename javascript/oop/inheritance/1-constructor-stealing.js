function SuperType(name) {
    this.name = name;
}


function SubType(name) {
    SuperType.call(this, name);

    // new 
    this.age = 29;
}

let subInstance = new SubType('nixixi');
console.log(subInstance  instanceof SubType); // true
console.log(subInstance  instanceof SuperType); // false