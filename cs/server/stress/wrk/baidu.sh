# Running 30s test @ https://www.baidu.com
#   12 threads and 400 connections

wrk -t12 -c400 -d30s https://www.baidu.com

