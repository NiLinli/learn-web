# Hash

Hash 算法 - 就是把**任意长度**的输入（又叫做预映射pre-image）通过散列算法变换成**固定长度**的输出，该输出就是散列值

## 单向加密(验证)

MD5(原始密码) = 加密后的文本

保存: 加密后的文本
验证(判断): 获取原始密码(Input) + MD5 算法 === 加密后的文本

1. Input 为原始密码 (加密后的文本作为 Input 没有意义)
2. 单向操作 (理论上无法通过加密后的文本反推出原始密码)

## 破解 Hash

正向推算

1. 穷举
2. rainbow table (根据常用的密码算出 MD5 结果, 进行对照)

防止破解

1. 组合使用 MD5 SHA 算法, 生成新的算法 (组合方式能够被获取, 根据新的方式生成新的 rainbow table)
2. bcrypt类做法, 拖慢加密速度 (破解所需要的时间变多, 自身验证时间也会变多, 可以辅助)
3. 加密 + salt
  - H[S(a) + P(a)] -> P'(a)
  - 保存 salt (随机生成的字符串) + P'(a)
  - 因为 salt 是随机的, 所以 rainbow table 需要根据每个用户计算出特定的 rainbow table , 提升了成本

## 常见 HASH

### MD5

Message-Digest Algorithm 5

7a26 69f2 7dba 2ba1 1152 244f 7dca f364(128 bit)

### SHA

Secure Hash Algorithm

- SHA1 160bit
