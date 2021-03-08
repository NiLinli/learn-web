# unicode

Unicode provides a unique number for every character

1. set of standard character encodings (字符编码集)
2. encoding method(常见的)
   - utf-8
   - utf-16

8 16 表示 Code unit size 即最小单元数

## BMP

Base Multilingual Plane 1/17 (0x0000-0xFFFF)
剩余的 16 个 Plane 为 ubmp(0x10000-0x10FFFF)

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

UCS-2 只有两个字节, 不能处理非 BMP 字符
UTF-16 为 UCS-2 的扩展, 可以处理 BMP 和 非 BMP 字符

变长, 约定带 BOM, 处理数据需要处理

Code unit size: 16 bit
有两种方式

### UBMP

UTF-16 处理 UBMP, 不直接显示, 使用 Surrogate pairs 代理对表示
一个代理对显示一个字符

Unicode 中下面两个范围为 UTF16 内置范围, 没有对应的字符:

- high surrogatge范围: 0xD800-0xDBFF
- lw surrogatge范围: 0xDC00-0xDFFF

## 参考资料

- [wiki UTF-8](https://en.wikipedia.org/wiki/UTF-8)
- [unicode.org](https://www.unicode.org/)
