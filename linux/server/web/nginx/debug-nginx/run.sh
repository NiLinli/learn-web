docker run \
  -it \
  -p 8091:80 \
  --rm \
  --name  debug-nginx-demo \
  debug-nginx-demo:1.0.0 \
  nginx-debug -g 'daemon off;' 
