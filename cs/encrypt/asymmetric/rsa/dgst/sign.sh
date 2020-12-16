# sign
openssl dgst -sign ../pem/rsa_1024_priv.pem -sha256 -out sign.bin file.txt
openssl dgst -sign ../pem/rsa_1024_priv_8.pem -sha256 -out sign_8.bin file.txt

openssl base64 -in ./sign.bin -out ./sign.bin.base64
openssl base64 -in ./sign_8.bin -out ./sign_8.bin.base64

# verify
openssl dgst -verify ../pem/rsa_1024_pub.pem -sha256 -signature sign.bin file.txt
openssl dgst -verify ../pem/rsa_1024_pub.pem -sha256 -signature sign_8.bin file.txt

openssl dgst -verify ../pem/rsa_1024_pub.pem -sha256 -signature sign_8.bin file.txt