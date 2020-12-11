// cipher  [ˈsaɪfə(r)]  n.密码
const { scryptSync, } = require('crypto');

const algorithm = 'aes-192-cbc';
const password = '用于生成密钥的密码';