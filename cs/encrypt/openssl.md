# Openssl

## RSA

genrsa 生成 privkey

`openssl genrsa -out rsa/rsa_1024_priv.pem 1024` 生成 privkey
`openssl rsa -pubout -in ./rsa/rsa_1024_priv.pem  -out ./rsa/rsa_1024_pub.pem` 生成 pubkey

rsautl 加密解密等

加密

1. `openssl rsautl -in ./originText.txt -out ./originText.pub2.in -inkey  ./rsa_1024_pub.pem -pubin -encrypt` 加密生成 bin 的 output
2. `openssl base64 -in ./originText.pub2.in -out ./originText.pub2.base64` bin -> base64 展示

解密

1. `openssl rsautl -in ./originText.pub2.in -inkey ./rsa_1024_priv.pem -decrypt`

签名

`openssl dgst -sign RSA.pem -sha256 -out sign.txt file.txt`
`openssl dgst -verify pub.pem -sha256 -signature sign.txt file.txt`