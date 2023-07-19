# micro-mall

spring boot 2.4+ 不再兼容 spring cloud netflix, 需要替换相关组件

- eureka => nacos 单独应用程序启动
- zuul  => spring cloud gateway(web flux 与 open feign 不兼容)
- feign => open feign

- mall-common 公共模块
- mall-order 购物车 + 订单
- mall-product 商品
- mall-user 用户

## CRON 表达式

- `*` 每
- `?` 位置不确定
- `-` 范围
- `,` 列表值
- `/` 步长 x/y x, x+y, x+2y, ...x+ny

## 分布式锁

多个服务同时操作共享资源

- redis
- zk
