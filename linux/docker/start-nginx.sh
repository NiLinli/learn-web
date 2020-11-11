#!/bin/bash
docker run \
-d \
-p 8090:80 \
--rm \
--name mynginx \
--volume /Users/yuangong/docker-demo/html:/usr/share/nginx/html \
--volume /Users/yuangong/docker-demo/conf:/etc/nginx \
nginx
