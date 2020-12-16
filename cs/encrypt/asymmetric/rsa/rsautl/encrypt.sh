# 加密 加密生成 bin 的 output
openssl rsautl -in ./originText.txt -out ./originText.pub.in -inkey  ../pem/rsa_1024_pub.pem -pubin -encrypt
# base64 加密结果  bin -> base64 展示
openssl base64 -in ./originText.pub.in -out ./originText.pub.base64

# 解密
openssl rsautl -in ./originText.pub.in -inkey ../pem/rsa_1024_priv.pem -decrypt
echo '\n'
openssl rsautl -in ./originText.pub.in -inkey ../pem/rsa_1024_priv_8.pem -decrypt
echo '\n'