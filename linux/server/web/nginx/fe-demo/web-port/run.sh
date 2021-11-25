docker run \
  -it \
  -p 8001:8001 \
  -p 8002:8002 \
  -p 8003:8003 \
  -p 8004:8004 \
  -p 8005:8005 \
  -p 8006:8006 \
  -p 8007:8007 \
  --rm \
  --name  web-port-server \
  web-port-demo:1.0.0 \
  nginx-debug -g 'daemon off;' 
