docker run \
  -it \
  -p 8011:8001 \
  -p 8012:8002 \
  --rm \
  --name  web-port-server-2 \
  web-port-demo:1.0.0
