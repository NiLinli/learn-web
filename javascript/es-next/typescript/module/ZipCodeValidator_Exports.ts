let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export = ZipCodeValidator;
// 这里只是一个语法, 并不是改变了 exports 对象的指向
// export 非 exports



// exports 为一个对象, 上面可以挂载需要导出的属性
// 类似于 ES6 的 export default, 但是 export default 并不兼容 cjs(前端打包时候 webpack 会处理, 但是 ts 层面不能处理)
// 为了支持 cjs 的 exports

// export = A;
// import A from 'A';