# swing

## MVC

程序就是对于需求的一种计算机语言的描述
人机交互(UI) 和 业务逻辑 分离

数据, 表现, 控制

- Model 模型
- View  视图
- Controller 控制器

Model:

1. 保存和维护数据, 提供接口让外部修改数据
2. 通知表现需要更新

View:

1. 从 Model 获得数据, 更新视图

Controller:

1. 监听用户输入, 根据输入调整数据