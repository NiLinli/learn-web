// interface 定义函数
interface searchFn1 {
    (source: string, subString: string): boolean
}

// type 定义函数
type searchFn2 = (source: string, subString: string) => boolean;

let mySearch: searchFn1 = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
}

let mySearch2: searchFn2 = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
}