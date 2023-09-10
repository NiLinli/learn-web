CC = gcc
CFLAGS=-Wall -O2 -I . -I .
LDLIBS = -lpthread

PROGS =	echo-server\
	echo-server-p\
	echo-server-t\
	echo-server-iom\
	
all: $(PROGS)

echo-server: echo-server.c network.c 
echo-server-p: echo-server-p.c network.c 
echo-server-t: echo-server-t.c network.c
echo-server-iom: echo-server-iom.c network.c

clean:
	rm -rf *~ e$(PROGS) *.o
