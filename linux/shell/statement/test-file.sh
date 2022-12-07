# 对常见的文件操作的判断

# -r 是否可读
# -w 是否可写
# -x 是否可以执行
[ -r if-then.sh ]
echo $?
[ -w if-then.sh ]
echo $?
[ -x if-then.sh ]
echo $?

# -d 是否是文件夹
[ -d ../statement ]
echo $?

# -e 是否存在
[ -e if-then.sh ]
echo $?

# -s 是否非空
[ -s if-then.sh ]
echo $?

# -f 是否是 ordinary file
# -L 是否是 symbolic link
