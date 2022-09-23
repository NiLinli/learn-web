// Error 为基类
// name
// message
// 其他属性兼容性不好, 不考虑

// RangeError - a number is outside the bounds of its range (infrequently)
try {
    const arr1 = new Array(-20); // -20 
    const arr2 = new Array(Number.MAX_VALUE);
} catch (error) {
    console.log(error)
    console.log(error.name);
    console.log(error.message)
}

// ReferenceError - when attempting to access a variable that doesn’t exist
try {
    a;
} catch (error) {
    console.log(error)
}

// SyntaxError -  there is a syntax error in a JavaScript string that is passed to eval()
try {
    eval("a ++ b");
} catch (error) {
    console.log(error)
}

// TypeError - a variable is of an unexpected type or an attempt is made to access a nonexistent method.
try {
    let obj = {

    };
    console.log(obj.sayHello())
} catch (error) {
    console.log(error)
}


try { 
    someFunction();
} catch (error) {
    if (error instanceof ReferenceError) {

    } else if (error instanceof TypeError) {

    } else {
        // other
    }
}

