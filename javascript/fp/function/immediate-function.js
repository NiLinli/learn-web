// ( () )
let a1 = 'a1';
(function () {
    console.log(a1);
}(a1));

// ()()
let a2 = 'a2';
(function () {
    console.log(a2);
})();


// + 
let b = '+'; +
+ function () {
    console.log(b);
}(b);

// !
let c = '!';
! function (params) {
    console.log(c)
}(c);


// 如果连着写两个()()类型的，js会解析不出来，加分号或者使用+等
// (function(){
//     console.log(1);
// })()

// (function() {
//     console.log(2);
// })()

+function(){
    console.log(1);
}()

+function() {
    console.log(2);
}()