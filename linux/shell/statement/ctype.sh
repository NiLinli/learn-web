if [ "$#" -ne 1 ]
  then
    echo "Usage: ctype char"
    exit 1
fi

# 判断是不是单个字符
char="$1"
# the “invisible” newline character that echo automatically prints at the end of each line
numchars=$(echo "$char" | wc -c)

if [ "$numchars" -ne 2 ]
then
  echo Please type a single character
  exit 1
fi

# 对字符进行分类
case "$char"
in
  [0-9] ) echo digit;;
  [a-z] ) echo lowercase letter;;
  [A-Z] ) echo uppercase letter;;
  *     ) echo special letter;;
esac
