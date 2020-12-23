# unicode

Unicode provides a unique number for every character

1. set of standard character encodings (字符编码集)
2. encoding method(常见的)
    - utf-8
    - utf-16

8 16 表示 Code unit size 即最小单元数

## BOM

Byte Order Mark 字节序标记

- UTF-8 Little Endian(le): 0xEF, 0xBB, 0xBF
- UTF-16 Little Endian(le): 0xFF, 0xFE
- UTF-16 Big Endian(be): 0xFE, OxFF

'a'

- le 0x00, 0x61
- be 0x61, 0x00

## UTF-8

变长, 约定不带 BOM

Code unit size: 8 bit

一种字符编码的方法

能够表示的 code point
17×2^16 = 1,114,112
1114111 + 1 = 1114112

## UTF-16

UCS-2, 变长, 约定带 BOM, 处理数据需要处理

Code unit size: 16 bit
有两种方式

## 参考资料

- [wiki UTF-8](https://en.wikipedia.org/wiki/UTF-8)
- [unicode.org](https://www.unicode.org/)