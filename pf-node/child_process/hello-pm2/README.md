# pm2

PM2 is daemon process manager that will help you manage and keep your application online. 


功能 

- 负载均衡
- 日志查看



`https://pm2.keymetrics.io/docs/usage/quick-start/`

启动

`pm2 start app.js`

管理进程

```bash
pm2 restart app_name/all/pid
pm2 reload
pm2 stop
pm2 delete
```

```bash
pm2 ls
pm2 monit 实时命令行面板
pm2 logs  实时日志
pm2 logs --lines 实时 200 最近 N 条日志
```

## 模式

- Fork mode
- Cluster mode

## 可视化


