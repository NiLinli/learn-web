# util 和 while 相反
# util 条件位 false 才执行
i=0

until [ $i -eq 10 ]
do 
  sleep 1
  echo $((i+=1))
done

echo $i;

# 中断 loop 运行
# break
# continue