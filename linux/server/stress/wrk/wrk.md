# wrk

HTTP benchmarking tool

```bash
Running 30s test @ https://www.baidu.com
  12 threads and 400 connections
  # 线程访问状况
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   793.05ms  393.80ms   2.00s    67.32%
    Req/Sec    63.24     65.93   287.00     81.05%
  # 总请求数                  总流量
  13837 requests in 30.11s, 138.54MB read
  Socket errors: connect 0, read 0, write 0, timeout 319
# QPS
Requests/sec:    459.62
Transfer/sec:      4.60MB
```