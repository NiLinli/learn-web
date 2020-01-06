# 语言基础 language basic

## 数据类型 date type

变量(C 中类型检查不算很严格, c++/java 更加严格)

1. 定义
2. 确定类型 type

大致为 4 中类型 in C

1. 整数
2. 浮点数
3. 指针
4. 自定义 struct

类型不同点

1. 类型名称 int long
2. 输出格式化
3. 表达数的范围
4. 内存所占的大小
5. 内存中的表现形式上(二进制数, 编码)

学界/工业界分歧：

- 支持 type, 编译之前检查错误 (c,java, c++) 面向底层
- 不支持 type, 不应该面对底层, 应该把重心放在事务逻辑上 (py, js, php) 面向应用

### bit

- A bit is a binary digit(二进制数) that represents one of two state.
- 计算机存储的东西都是二进制的, 格式化(或者其他取出来) 的方式决定其最终的展现形式
  - 编码(char float...)
  - 非编码(直接取出来 int...)

Ox55 - 十六进制  %x
055  - 八进制    %o

### int 整数

二进制数(补码), 不需要编码

char -> short -> int -> long -> (long long [C99])

#### boolean

C99 支持 true / false
true == 0
false == 1

#### char 1

1. char 类型存在内存中是以整数存储(二进制展现形式)
    - 可以被读取成 整数
    - 也可以被读取为 字符
2. 1 个字节
3. 空字符表示 `'\0'` 非`''`
    - 等于整数 0
    - char a = 0     一个字节
    - 不是 int a = 0  四个字节

%c 格式化输入输出

#### short 2

#### int 4

取决于 CPU + 编译器, 代表一个字

- 寄存器的宽度/大小 32 bit 64 bit
- bus 一次传递的数据

#### long (4 or 8)

取决于 CPU + 编译器, 代表一个字 寄存器的宽度

#### long long 8

unsigned 主要是为了做移位

格式化:

- `%d/%u`       decimal [ˈdesiməl ] 十进制  char short int  
- `%ld/%lu`     long
- `%lld/llu`    long long
- `%o`          octal ['ɒktl]
- `%x`          hexadecimal [ˌheksəˈdesɪml]

#### 程序中如何选择整数类型？

1. 早期 准确的表达计算机和硬件接口
2. 现在 没有特别的需要 就用 int
    - 现在字长 32bit 64bit  计算机每一次读取的数据就是 32bit  
    - 读取 char 和 short 也是读取 32bit , 然后从中截取, 这样效率也不会很高(可能会更慢)
    - 现代编译器一般会采取内存对齐, 更短的类型有可能实际也占据 int 的大小(虽然 sizeof 返回的是定义值 )

### float 浮点数

表示小数有两种编码方式：

1. fixed point number: 定点数 固定的 bit 数用于整数存储, 固定的 bit 数用于小数存储(fraction)
2. float point number: 浮点数 比 fixed point 数存储范围更大

编码形式

float -> double(没有特殊需求, 选择 double)  -> long double

float 7 个数字有效 scan %f   printf %f %e
double 15 个数字有效 scan %lf printf $f %e

数学表达数字是连续的
计算器表达数字是离散的

计算机如果不存在某一个数, 取相近的数字

nan inf -inf 不包括在 float 里面, 但是可以用 float 表示

### 运算

运算符两边不一致的情况下, 会自动转换成较大的类型
强制转换 (类型)值

## 语句 statements

a statement performs an action.

通用

- if else
- while
- do while
- for
- switch
- break
- continue
- goto

## 操作符 operator & 表达式 expression

- operator: manipulate data values (处理数据值)
- expression: expression produces a value (产生一个值)
  - operator 产生的表达式
  - 函数表达式

N 元运算符 运算符一共有 N 个操作数

1. unary (一元/单目运算符) **右到左**
    1. `-` 负
    2. `~` 按位取反(位运算符)
    3. `++`自增
    4. `--`自减
    5. `!` 非
2. arithmetic (算数运算符)
    1. `/`
    2. `*`
    3. `%`
    4. `+`
    5. `-`
3. bitwise (位运算符) 左到右
    1. `<<`左移
    2. `>>`右移
4. relational (关系运算符)
    1. `>`
    2. `>=`
    3. `<`
    4. `<=`
5. equality (相等运算符)
    1. `==`
    2. `!=`
6. bitwise (位运算符) 左到右
    1. `&`(AND)  
    2. `|`(OR)
    3. `^`(XOR)
7. logic (逻辑运算符, 短路运算, 但是表达式产生的值不同语言中不同)
    1. `&&`
    2. `||`
8. conditional (条件运算符 三目) **右到左**
9. assignment (赋值运算符) **右到左**
    1. `=`
    2. `+= -= *= /= %= <<= >>= &= ^= |=`
10. comma (逗号运算符)

### 按位运算

C 语言接近底层(unsigned 做纯二进制运算)

1. 编译完成后可以直接在机器上面运行
2. 提供一些接近底层的操作

- 按位运算: 二进制的形式进行运算
- 逻辑运算:
  - C 语言中: 把所有非 0 值都变为 1, 然后做按位运算(本质 0 和 1 的按位运算)
  - 其他语言中: 不同于 C 语言, 会有相应的返回值

1. and &
    - 让某位为 0
    - 取一个数当中的一段
2. or |
    - 让某位为 1
    - 连接两个数
3. xor ^
    - 做两次异或和原有结果相等
4. left-shift
    - 左移 n 位 等同于 n * 2
    - n 的值取决于 int 的大小
5. right-shift
    - unsigned
      - 右边填入 0
      - / (2 *n)
    - signed
      - 右边填入最高位(符号位), 保持符号
      - / (2 *n)
