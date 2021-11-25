docker run \
  -it \
  -p 9001:8080 \
  --rm \
  --name  web-demo-server1 \
  web-demo:1.0.0 \
  nginx-debug -g 'daemon off;' 

