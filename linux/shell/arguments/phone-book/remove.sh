# remove the item
# 需要确保每个用户操作的都是单独的 tmp
# $$ 当前用户的 pid(process Id)
grep -v "$1" data > /tmp/data$$

mv /tmp/data$$ data