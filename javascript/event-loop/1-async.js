// 1. we run some code 
// 2. give it a callback
// 3. run that later

console.log('Hi!');

setTimeout(() => {
    console.log('There');
}, 2000);

console.log('JSConfEU');

// Hi!
// JSConfEU
// There