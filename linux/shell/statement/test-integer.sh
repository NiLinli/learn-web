x1='005'
x2='    10'

# string eq   false
[ "$x1" = 5 ]
echo $?

# integer eq   true
[ "$x1" -eq 5 ]
echo $?

# lt <
[ 5 -lt 5 ]
echo $?

# le <=
[ 5 -le 5 ]
echo $?

# gt >
# ge >=
# ne !=
