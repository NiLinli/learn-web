#ifndef __NETWORK_H__
#define __NETWORK_H__

#include <stdio.h>
#include <string.h>
#include <netdb.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <unistd.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <pthread.h>

#define MAXLINE 8000
#define LISTENQ 1024 /* Second argument to listen() */

int open_clientfd(char *hostname, char *port);
int open_listenfd(char *port);
int echo(int connfd);
int echo_slice(int connfd);
typedef void handler_t(int);
handler_t *Signal(int signum, handler_t *handler);

#endif