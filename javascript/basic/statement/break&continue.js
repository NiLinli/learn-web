console.log('------switch break------')
let key1 = 1

switch (key1) {
    case 1:
        console.log(1)
        break
    case 2:
        console.log(2)
        break
    case 3:
        console.log(3)
        break
    default:
        console.log('default')
        break
}

console.log('------switch continue(error)------')
let key2 = 1

// switch (key2) {
//     case 1:
//         console.log(1)
//         continue
//     case 2:
//         console.log(2)
//         continue
//     case 3:
//         console.log(3)
//         break
//     default:
//         console.log('default')
//         break
// }

console.log('------for break------')
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break
    }
    console.log(i)
}

console.log('------for continue------')
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue
    }
    console.log(i)
}

// Jump statement: 
// break
//     1. 立即退出最内层循环(循环中使用)
//     2. 退出 switch 语句
// continue
//     1. 执行下一次循环(循环中使用)    

// return 
//     1. return 语句指函数调用后的返回值
//     2. return 语句只能在函数体内出现    
//     3. return; <--> return undefined