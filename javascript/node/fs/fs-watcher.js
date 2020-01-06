const fs = require('fs');

// const watcher = fs.watch('./test.txt', {
//     encoding: 'utf-8'
// }, (eventType, filename) => {
//     console.log(`eventType : ` + eventType);
//     console.log(filename);
// });


// setTimeout(() => {
//     watcher.close();
// }, 10000);

const watchFolder = fs.watch('./', { encoding: 'utf-8' }, (eventType, filename) => {
    console.log(`eventType : ` + eventType);
    console.log(filename);
});