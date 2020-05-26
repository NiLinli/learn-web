let stringObj = '𠮷abckefg';

// chatAt() --> 给定位置的那个字符
// 与数组 Index 效果相同

console.log(`
    stringObj.charAt(1) = ${stringObj.charAt(0)}
    getWholeCharAndI(stringObj, 0) = ${getWholeCharAndI(stringObj, 0)}
    stringObj[1] = ${stringObj[0]} es5 ie8+ 
`);


// 支持 utf-16 的 2/4 字节
function getWholeCharAndI(str, i) {
    var code = str.charCodeAt(i);

    if (isNaN(code)) {
        return ''; // Position not found
    }
    if (code < 0xD800 || code > 0xDFFF) {
        return [str.charAt(i), i]; // Normal character, keeping 'i' the same
    }

    // High surrogate (could change last hex to 0xDB7F to treat high private 
    // surrogates as single characters)
    if (0xD800 <= code && code <= 0xDBFF) {
        if (str.length <= (i + 1)) {
            throw 'High surrogate without following low surrogate';
        }
        var next = str.charCodeAt(i + 1);
        if (0xDC00 > next || next > 0xDFFF) {
            throw 'High surrogate without following low surrogate';
        }
        return [str.charAt(i) + str.charAt(i + 1), i + 1];
    }
    // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
    if (i === 0) {
        throw 'Low surrogate without preceding high surrogate';
    }
    var prev = str.charCodeAt(i - 1);

    // (could change last hex to 0xDB7F to treat high private surrogates
    // as single characters)
    if (0xD800 > prev || prev > 0xDBFF) {
        throw 'Low surrogate without preceding high surrogate';
    }
    // Return the next character instead (and increment)
    return [str.charAt(i + 1), i + 1];
}





