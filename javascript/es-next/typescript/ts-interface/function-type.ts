interface searchFun {
    (source: string, subString: string): boolean
}

let mySearch: searchFun;
mySearch = function(source, subString){
    let result = source.search(subString);
    return result > -1;
}