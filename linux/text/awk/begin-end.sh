awk 'BEGIN{print "姓名 语文 数学 英语"} {printf "%-8s%-5d%-5d%-5d\n",$1,$2,$3,$4}' score.txt

echo ok | awk '{print $1} END{print "end"}'