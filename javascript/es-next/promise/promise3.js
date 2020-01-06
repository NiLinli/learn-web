// catch 等同于 then(null, rejection)
// catch 也可以返回 promise, 用于链式调用

// catch 正常用法
const p1 = new Promise((resolve, reject) => {
    try {
        console.log('haha');
        b.n.n = 234;
        resolve('hehe');
    } catch (error) {
        reject(error);
    }
});

p1
  .then(value =>  console.log('resolved + ' + value ))
  .catch(error => console.log(error.message))

// catch 返回 promise / value 效果等同于 then
p1
  .then(value => console.log('resolved + ' + value ))
  .catch(error => {
    console.log(error.message)
    return 123;
  })
  .then(value => {
    console.log('after catch + ' + value )
    return Promise.reject('hehe')
  })
  .catch((error) => console.log(error))
  .then(() => console.log('Do this whatever happened!!')) // catch 后面可以跟 then 


// then 中抛出错误 等同于返回 rejected promise
let p2 = new Promise(( resolve, reject) => {
    resolve(123);
});

p2
  .then(value => console.log(value.b.c))        // then 中产生错误
  .catch(error => console.log(error.message))

// 错误
// 1. catch 抛出的错误 主动throw / 被动
// 2. reject 直接生成 rejected promise

let p3 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        // let a = d.c.c;   // 无法捕获异步 throw 出来的错误
        reject({ message: 'ReferenceError: d is not defined'})
    }, 1000)
});

p3
  .then(value => console.log(value))
  .catch(error => console.log(error.message))

