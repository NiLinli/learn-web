# !
[ ! -x if-then.sh ]
echo $?
[ -x if-then.sh ]
echo $?

# -a  -> and
[ \( -x if-then.sh \) -a \( ! -x if-then.sh \) ]
echo $?

# -o  -> or
[ \( -x if-then.sh \) -o \( ! -x if-then.sh \) ]
echo $?
