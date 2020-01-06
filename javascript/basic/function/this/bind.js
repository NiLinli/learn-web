// bind 绑定函数的 this 值， 返回一个新的函数
var objectSayColor = sayColor.bind(o);
objectSayColor();


let p1 = {
    name: 'nixixi',
    age: 18,
    sayName: function(){
        setTimeout((function(){
            console.log(this.name);
        }).bind(this),0);
    },
};

p1.sayName();


// 2
let btn = document.getElementById('btn');
btn.addEventListener('click', (function(){

}).bind(this));



