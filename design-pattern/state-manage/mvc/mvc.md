# mvc

MV\*

前端调度改变视图  
后端调用返回数据给试图  

- View 视图
- Model 数据模型
- Controller/ViewModel/... 调度
  - Service 实际逻辑
  - Dao (data access object) 访问数据库

轻重 Model/Controller/Service 层取决于代码组织策略  

传统 MVC: User/API -> Controller -操作-> Model -更新-> View

- View 和 Controller 没有关系
- Model 更新 View 

MVVM: View <-> Viewport <-> Model

- 强调 view 与 viewport 的关系
- viewport 更新 view
- 本质也是单向数据流 正向然后反向


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