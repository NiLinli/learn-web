# Thread

问题

- race condition 多个线程共同操作一个对象, 可能会得到错误的结果
- visibility problem 一个线程更新了对象, 其他线程可能看不到更改

解决方法

- confinement 限制共享
  - ThreadLocal class
- synchronization
  - Lock class
  - synchronized keyword 隐式加锁
  - visibility 可见性 
    - volatile keyword
    - thread signal(notify/wait)
  - atomic object (CAS 指令级别乐观锁)
  - Collections.synchronizedCollection
  - 提供了很多封装好的的可重入类...

  