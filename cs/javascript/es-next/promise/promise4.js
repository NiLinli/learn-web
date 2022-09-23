// If the Promise that then is called on adopts a state (fulfillment or rejection) 
// for which then has no handler,
// a new Promise is created with no additional handlers,
//  simply adopting the final state of the original Promise on which then was called.


// 忽略某个状态的 callback 情况
const p1 = new Promise((resolve, reject) => {
    throw 'some error';
});

const p2 = new Promise((resolve) => {
    resolve(123);
});

// then 中忽略 rejection
p1
  .then(() => {
    console.log('p1 then 1')
    return p2;
  })
  .then(() => {
    console.log('p1 then 2')
    return p2;
  })
  .catch(error => console.log(error))  // 是否能捕获

// then 中忽略 fulfillment
p2
  .then(()=>{
    console.log('p2 then 1')
    return p2;
  })
  .catch((error)=> {
    console.log(error)
  })
  .then(()=>{
    console.log('p2 then 2')
  })