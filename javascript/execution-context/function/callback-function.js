let a =0;

// event hanlder(普通调用) are lexically scoped
// they are executed in the scope they are defined, not the scope from which they are invoked(唤起)


// closure
function foo(){
    let a =1;

    setTimeout(() => {
        console.log(a);
    }, 0);
}

foo();



// xx.onclick = eventHandler
// xx.addEventListener(eventHandler,false)
// run with modified scope chain -> this 指向