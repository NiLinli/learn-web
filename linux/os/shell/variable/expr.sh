# expr 要求操作数两边必须要是空格, 不然不能解析

# 3
expr 1 + 2

# string 1+2
expr 1+2

# 
expr 10 + 20 / 2

# * 需要转译
expr 10 * 4
expr 10 \* 4