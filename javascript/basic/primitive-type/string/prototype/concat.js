
import { bench } from '../../../../bench';

let str1 = 'abc-'



// concat 
function concatStr() {
    str1.concat(
        'a', 'b', 'c', 'd', 'e', 'f',
        'a', 'b', 'c', 'd', 'e', 'f',
        'a', 'b', 'c', 'd', 'e', 'f',
        'a', 'b', 'c', 'd', 'e', 'f',
        'a', 'b', 'c', 'd', 'e', 'f'
    );
}



// + 
function other() {
    str1 +
        'a' + 'b' + 'c' + 'd' + 'e' + 'f' +
        'a' + 'b' + 'c' + 'd' + 'e' + 'f' +
        'a' + 'b' + 'c' + 'd' + 'e' + 'f' +
        'a' + 'b' + 'c' + 'd' + 'e' + 'f' +
        'a' + 'b' + 'c' + 'd' + 'e' + 'f'
        ;
}

console.log(`concat spend ${bench(concatStr)}`);
console.log(`concat spend ${bench(other)}`);
