// 交叉类型
// 交叉类型需要同时满足所有的属性

function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};

    for (let key in first) {
        (<any>result)[key] = first[key];
    }
    
    for (let key in second) {
        if (!result.hasOwnProperty(key)) {
            (<any>result)[key] = second[key];
        }
    }

    return result;
}


class Nll3 {
    constructor(public name: string) { }
}
interface Loggable {

    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
        console.log('log');
    }
}
var jim = extend(new Nll3("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();