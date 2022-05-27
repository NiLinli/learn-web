// array-like -> array
// 1.0
function makeArray1(arrayLike) {
    let result = [];
    for (let index = 0; index < arrayLike.length; index++) {
        const element = arrayLike[index];
        result.push(element);
    }
    return result;
}

function doSomething1() {
    let argArr = makeArray1(arguments);
    console.log(argArr);
}

// 2.0 
function makeArray2(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
}

function doSomething2() {
    let argArr = makeArray1(arguments);
    console.log(argArr);
}

// 3.0 
function doSomething() {
    let argArr = Array.from(arguments);
    console.log(argArr);
}

doSomething1('1.0');
doSomething2('2.0');
doSomething('from');


