name=nilinli
# test
test "$name" = nixixi
echo $?

test "$name" = nilinli
echo $?

# test 的简写 []
# [ 是一个 command, 类似于 test
[ "$name" = nilinli ]
echo $?
