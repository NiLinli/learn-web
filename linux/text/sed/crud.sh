# 1i: line 1 insert(before)
sed -i "1i insert before" -f file.txt


# 1a: line 1 after
sed -i "1a insert after"  -f file.txt

# line [2,3] delete
sed -i '2,3d' file.txt

# line [3,4] replace coding3min => tom
# g: global
sed -i '3,4s/coding3min/tom/g' config.txt

# line [3,4] retrieve
sed -n 3,4p config.txt

