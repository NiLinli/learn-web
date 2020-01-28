# 单引号作用是用来操作带空格的字符串
echo one   two   three four
echo 'one   two   three four'

# 单括号带来的问题是不能够解析 $a 变量
a=3
echo '$a  456'
echo "$a  456"

# backslash 首先是转译问题, 再就是换行书写
echo "Nixixi is \
18 years old,\
and is very handsome!"

# back quote
echo "Time is `date`"
echo "Time is $(date)"