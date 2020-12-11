var MD5 = require('crypto-js/md5');
var blueMD5 = require('blueimp-md5');

console.log(MD5('nilinli').toString());

console.log(blueMD5('nilinli'));
console.log(blueMD5('nilinli', null, true));

// 7a26 69f2 7dba 2ba1 1152 244f 7dca f364    -- 128 bit

// 单向加密
// MD5(原始密码) = 加密后的文本

// 保存: 加密后的文本
// 验证(判断): 获取原始密码(Input) + MD5 算法 === 加密后的文本
// 1. Input 为原始密码 (加密后的文本作为 Input 没有意义)
// 2. 单向操作 (理论上无法通过加密后的文本反推出原始密码)

// 1. 知道了除了原始密码以外的任何信息(加密后的文本, 代码...)
// 2. 没有绝对的安全, 破解密码需要的成本超过获得的收益，就是相对安全的

// (破解)正向推算
// 1. 穷举
// 2. rainbow table (根据常用的密码算出 MD5 结果, 进行对照)

// 防止破解
// 1. 组合使用 MD5 SHA 算法, 生成新的算法 (组合方式能够被获取, 根据新的方式生成新的 rainbow table)
// 2. bcrypt类做法, 拖慢加密速度 (破解所需要的时间变多, 自身验证时间也会变多, 可以辅助)
// 3. 加密 + salt
//      H[S(a) + P(a)] -> P'(a)
//      保存 salt (随机生成的字符串) + P'(a)
//      因为 salt 是随机的, 所以 rainbow table 需要根据每个用户计算出特定的 rainbow table , 提升了成本
