// string -> array

let a = 'akbvkjksjdfnnccksdfjnasljlkj';
let aArray = a.split('n')

console.log(aArray)

function splitOne(str, byStr, type) {
    // type === 'first' or 'last'
    var index = 0;
    var tempArr = [];
    if (type === 'first') {
        index = str.indexOf(byStr);
    } else if (type === 'last') {ß
        index = str.lastIndexOf(byStr);
    }
    tempArr.push(str.substring(0, index));
    tempArr.push(str.substring(index + 1, str.length));
    return tempArr;
}
var str = 'kjsfdlnnvtusfjau12l24';
console.log(splitOne(str, 'l', 'first'));
console.log(splitOne(str, 'l', 'last'));
