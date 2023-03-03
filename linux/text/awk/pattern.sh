# 条件过滤 条件表达式
awk '$2>=90{print $0}' score.txt

# 判断语句
awk '{if($2>=90) print $0}' score.txt 
awk '{if($2>=90)print $1,"优秀"; else print $1,"良好"}' score.txt