# 增量更新 自动化编译

# target ... : prerequisites ...
#    recipe
#    ...
#    ...

# target: 需要达到的目标
# prerequisites: 达到目标需要依赖的文件
# recipe: 达到目标需要执行的命令

object = main.o max.o getline.o strindex.o 


# make 找到第一个 target 执行
# a.out : $(object)
# 	gcc $(object) -o a.out

# main.o : main.h getline.h max.h strindex.h 
# 	gcc -c main.c

# max.o : max.h
# 	gcc -c max.c 

# getline.o : getline.h
# 	gcc -c getline.c

# strindex.o : strindex.h
# 	gcc -c strindex.c


debug : $(object)
	gcc -g $(object) -o a.out 

main.o : main.h getline.h max.h strindex.h 
	gcc -g -c main.c

max.o : max.h
	gcc -g -c max.c 

getline.o : getline.h
	gcc -g -c getline.c

strindex.o : strindex.h
	gcc -g -c strindex.c	

# make clean
clean : 
	rm a.out $(object)