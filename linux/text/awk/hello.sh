# $0 是整列, $n 是第 n 列
echo 'I love me' | awk '{print $3 $2 $1 $0}'

# 定义分隔符 field separator -F
echo '192.168.1.1' | awk -F "." '{print $2}'



