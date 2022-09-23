
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0)
}
console.log(i);




setTimeout(() => {
    console.log('-------------')
    for (var i = 0; i < 3; i++) {
        (function (i) {
            // for 的时候就要传进来
            setTimeout(() => {
                console.log(i);
            }, 0)
        })(i);
    }
}, 4000);






