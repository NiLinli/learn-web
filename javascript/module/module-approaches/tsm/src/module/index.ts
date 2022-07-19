import StaticZipCodeValidator from './static-zip-code-validator';

// 将几个模块的内容联合在一起导出
export * from './base-validation';
export * from './zip-code-validator';
export * from './static-zip-code-validator'; // default 的不会处理

// default 也不能直接 export from
// export StaticZipCodeValidator from './StaticZipCodeValidator';
export { StaticZipCodeValidator };

// export 无法二次直接导出 default