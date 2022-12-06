# mvc

- MV\*
- Flux

前端调度改变视图  
后端调用返回数据给试图  

## MV\*

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


## Flux

强调的是单一 store 对应多个 view  
并且变更 store 方式单一可记录