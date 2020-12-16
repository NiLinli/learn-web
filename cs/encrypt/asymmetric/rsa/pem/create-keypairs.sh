# 生成 privkey PKCS#1 
openssl genrsa -out rsa_1024_priv.pem 1024
# 将 PKCS#1 转换为 PKCS#8
openssl pkcs8 -topk8 -inform PEM -in rsa_1024_priv.pem -out rsa_1024_priv_8.pem -outform PEM -nocrypt
# 生成 pubKey 都为 PKCS#8
openssl rsa -pubout -in ./rsa_1024_priv.pem  -out ./rsa_1024_pub.pem
openssl rsa -pubout -in ./rsa_1024_priv_8.pem -out ./rsa_1024_pub_8.pem