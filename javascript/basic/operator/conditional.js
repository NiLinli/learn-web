function a() {
    console.log('a');
    return true;
}


function b() {
    console.log('b');
    return false;
}


c = 2 > 1 ? a : b;

console.log(c);

// right-associative
console.log(
    true ? false: true ? true: true,    // false
    true ? false: (true ? true: true),  // false
    (true ? false: true) ? true: true
);