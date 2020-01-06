// blow 爆裂
function foo(){
    return foo();
}

foo();

// RangeError: Maximum call stack size exceeded