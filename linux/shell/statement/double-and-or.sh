# 断路
[ 1 -eq 1 ] && echo 1
[ 1 -eq 2 ] && echo 2

# 短路
[ 1 -eq 1 ] || echo 3
[ 1 -eq 2 ] || echo 4