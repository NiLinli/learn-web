docker run \
  -i -t \
  -p 7080:80 \
  -p 7443:443 \
  --rm \
  --name  load-balance-server \
  load-balance:1.0.0
