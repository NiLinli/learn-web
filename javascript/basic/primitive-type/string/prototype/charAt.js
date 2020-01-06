let stringObj = new String('abckefg');
let han = '倪西西';

// chatAt()      -->给定位置的那个字符
// chatCodeAt()  -->给定位置的那个字符对应的字符编码
console.log(`
    stringObj.charAt(1) = ${stringObj.charAt(1)}
    stringObj.charCodeAt(1) = ${stringObj.charCodeAt(1)}
    stringObj[1] = ${stringObj[1]} es5 ie8+ 
    han.charAt(2) = ${han.charAt(2)}
`);

// es6 扩展 codePointAt() ->识别超过连个字节的字符utf-32


// Traversal
// for ... of 
let str3 = '𠮷14231';
// utf-32
for (let char of str3) {
    console.log(char);
}
// utf-16
for (let i = 0; i < str3.length; i++){
    console.log(str3[i]); // es5
}



