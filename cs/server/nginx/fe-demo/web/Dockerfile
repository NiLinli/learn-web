FROM nginx:latest

# 拷贝静态文件
COPY ./static/ /usr/share/nginx/html/

# 拷贝 nginx 配置文件
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/conf.d/ /etc/nginx/conf.d/

EXPOSE 80
