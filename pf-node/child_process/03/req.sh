#!/bin/bash

for((i=1;i<=8;i++)); do   
  curl http://127.0.0.1:8228
  echo ""
done 


# curl http://127.0.0.1:8228/error