docker run \
  -it \
  -p 8031:8031 \
  -p 8032:8032 \
  --rm \
  --name  h5-port-server \
  h5-port-demo:1.0.0 \
  nginx-debug -g 'daemon off;' 
