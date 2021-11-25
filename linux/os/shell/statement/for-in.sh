# for -- list
for i in 1 2 3
do
  echo $i
done

# $* 不适合
# "$@" 能够正确识别参数 5 '6 7' 8
echo Number of arguments passed is $#
for arg in "$@"
do 
  echo "arg - $arg"
done

# 等同于上面代码
for arg1
do
  echo "arg new - $arg1"
done