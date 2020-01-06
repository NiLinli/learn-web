setInterval(()=>{
  console.log(1);
  console.log(a.b.c);
}, 2000);

// nodejs
// 无论是 sync 还是 async 中出现错误没有捕获, 程序都会 exit

// web
// sync 程序中断
// async 程序会报错, 但是异步 callback 依然会被执行