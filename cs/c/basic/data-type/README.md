# 数据类型 data type

变量(C 中类型检查不算很严格, c++/java 更加严格)

1. 定义
2. 确定类型 type

大致为 4 中类型 in C

- 整数
- 浮点数
- 指针
- 自定义 struct

## 类型不同点

- 类型名称 int long
- 输出格式化
- 表达数的范围
- 内存所占的大小
- 内存中的表现形式上(二进制数, 编码)






## int

二进制数(补码), 不需要编码

- char   1
- short  2
- int    4
- long   4(32)/**8(64)**
- long long   8

不同编译方式数据的范围不同
long 表示两种情况有歧义, 可移植性低

### 可移植性

1. c: 使用 int32_t & int64_t 这种明确的类型
2. java: long 不随着编译条件发生变化, 始终为 8

### 性能

早期 不考虑可移植性, 准确的表达计算机和硬件接口

现在 考虑可移植性

32/64bit 计算机每一次读取的数据就是 32bit

- 读取 char & short 也是读取 32bit , 然后从中截取, 这样效率也不会很高(可能会更慢)
- 现代编译器一般会采取内存对齐, 更短的类型有可能实际也占据 int 的大小(虽然 sizeof 返回的是定义值)
- 没有特别的需要 int

### 无符号数

two's complement: 1 0 相互补充表示正负  
int 默认都是 T

unsigned 主要是为了做移位

c/c++ 支持无符号数(并不是所有的语言都支持)

- 无法表示负数
- 表示的范围大一些

### 格式化

- %c 格式化输入输出
- `%d/%u` decimal [ˈdesiməl ] 十进制 char short int
- `%ld/%lu` long
- `%lld/llu` long long
- `%o` octal ['ɒktl]
- `%x` hexadecimal [ˌheksəˈdesɪml]

## boolean

- true == 1
- false == 0
- C99 支持 true / false

布尔代数运算 

- ~/&/|/...
- 建议布尔代数与数字逻辑之间的联系(数字通信)
- 位运算
   - 位向量: 长度固定, 0与1组成的串
   - w1:1101 w2:0011 w1&w2结果也是一个位向量, 是两个对应元素之间的布尔运算

## float 浮点数

表示小数有两种编码方式：

1. fixed point number: 定点数 固定的 bit 数用于整数存储, 固定的 bit 数用于小数存储(fraction)
2. float point number: 浮点数 比 fixed point 数存储范围更大

编码形式

float -> double(没有特殊需求, 选择 double) -> long double

float 7 个数字有效 scan %f printf %f %e
double 15 个数字有效 scan %lf printf $f %e

数学表达数字是连续的
计算器表达数字是离散的

计算机如果不存在某一个数, 取相近的数字

nan inf -inf 不包括在 float 里面, 但是可以用 float 表示

### 运算

运算符两边不一致的情况下, 会自动转换成较大的类型
强制转换 (类型)值



